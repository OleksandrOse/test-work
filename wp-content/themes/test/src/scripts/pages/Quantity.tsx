import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Breadcrumbs, FormField, Button } from '../components';
import { useGlobalState } from '../utils/GlobalStateProvider';
import { ButtonTypes } from '../types/ButtonTypes';
import { validateFields } from '../utils/validateFields';

export const Quantity: React.FC = () => {
  const { data, setData } = useGlobalState();
  const { name, email, phone } = data;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const isContact = path === '';
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);
  const [touched, setToched] = useState({
    quantity: false,
  });

  const [isValid, setIsValid] = useState({
    quantity: false,
  });

  const [errors, setErrors] = useState({
    quantity: false,
  });

  const { quantity } = data;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name: field, value } = event.target;

    setData(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: false }));
    setToched(current => ({ ...current, [field]: false }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setErrors({
      quantity: !quantity
    });

    if (!quantity?.trim() || isValid.quantity) {
      return;
    }

    navigate('/price');
  };

  const handleBlur = (value: string, field: string) => {
    if (!value?.trim().length) {
      setToched(current => ({
        ...current,
        [field]: true,
      }));
    }

    if (quantity) {
      setIsValid(current => ({
        ...current,
        [field]: validateFields(value, field),
      }));
    }
  };

  useEffect(() => {
    if (!name && !email && !phone) {
      navigate('/');
    }
  }, [name, email, phone])

  const errorQuantity = touched.quantity || errors.quantity;

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Breadcrumbs />
        <h1>
          {isContact ? 'Contact Info' : title}
        </h1>

        <form className="form-horizontal" onSubmit={handleSubmit}>
          <FormField
            type="text"
            name="quantity"
            value={quantity!}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errorQuantity}
            isValid={isValid.quantity}
          />
          <div className="btn-group">
            <Button type={ButtonTypes.Submit} title="Continue" />
            <Button type={ButtonTypes.Button} title="Back" />
          </div>
        </form>
        </div>
        
      </div>
    </div>
  );
};
