import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs, Button } from '../components';
import { useGlobalState } from '../utils/GlobalStateProvider';
import { ButtonTypes } from '../types/ButtonTypes';
import { postData } from '../utils/postMethod';

export const Price: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const path = pathname.slice(1);
  const isContact = path === '';
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);
  const { data, setData } = useGlobalState();
  const { name, email, phone, quantity } = data;

  let price;
  const titleName = name!.slice(0, 1).toUpperCase() + name!.slice(1);
  (() => {
    switch (true) {
      case +quantity! <= 10:
        price = 10;
        break;
      case (+quantity! > 10) && (+quantity! <= 100):
        price = 100;
        break;
      case (+quantity! > 100) && (+quantity! <= 1000):
        price = 1000;
        break;
      case (+quantity! > 1000) && (+quantity! <= 10000):
        price = 10000;
        break;
      default:
        price = 0;
    }
  })();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch('http://test-work/wp-json/wp/v2/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        title: titleName,
        content: email,
        status: 'publish',
      })
    })
      .then(response => response.json())
      .then(post => {
        console.log(post);
        if(post.code !== "rest_no_route") {
          setData(current => ({ ...current, ['isDataLoaded']: false }));
        } else {
          setData(current => ({ ...current, ['isDataLoaded']: true }));
        }
      })
      .catch(() => {
        setData(current => ({ ...current, ['isDataLoaded']: true }));
      })

    navigate('/done');
  }

  useEffect(() => {
    if (!name && !email && !phone && !quantity) {
      navigate('/');
    }
  }, [name, email, phone, quantity]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Breadcrumbs />
          <h1>
            {isContact ? 'Contact Info' : title}
          </h1>

          <form className="form-horizontal" onSubmit={handleSubmit}>
            <h1 className="card-price">{`$${price}`}</h1>

            <div className="btn-group">
              <Button type={ButtonTypes.Submit} title="Send to email" />
              <Button type={ButtonTypes.Button} title="Back" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
