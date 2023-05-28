import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs, Button } from '../components';
import { ButtonTypes } from '../types/ButtonTypes';
import { useGlobalState, GlobalStateContext } from '../utils/GlobalStateProvider';

export const Done: React.FC = () => {
  const { data, setData } = useGlobalState();
  const { name, email, phone, quantity, isDataLoaded } = data;
  console.log(isDataLoaded);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const path = pathname.slice(1);
  const isContact = path === '';
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setData({
      name: '',
      email: '',
      phone: '',
      quantity: '',
    });

    navigate('/');
  };

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
            <label className="form-label">
              {isDataLoaded
                ? '⚠️ We cannot send you email right now. Use alternative way to contact us'
                : 'Your email was send succesfully'
              }
            </label>

            <div className="btn-group">
              <Button type={ButtonTypes.Submit} title="Start again" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
