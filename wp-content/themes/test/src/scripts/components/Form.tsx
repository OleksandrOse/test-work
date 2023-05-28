import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useGlobalState } from '../utils/GlobalStateProvider';
import { validateFields } from '../utils/validateFields';
import { ButtonTypes } from '../types/ButtonTypes';
import { Button, FormField } from './index';

export const Form: React.FC = () => {
  const { data, setData } = useGlobalState();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [touched, setToched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const { name, email, phone } = data;

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
      name: !name,
      email: !email,
      phone: !phone,
    });

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return;
    }

    if (isValid.name || isValid.email || isValid.phone) {
      return;
    }

    navigate('/quantity');
  };

  const handleBlur = (value: string, field: string) => {
    if (!value?.trim().length) {
      setToched(current => ({
        ...current,
        [field]: true,
      }));
    }

    if (email || phone || name) {
      setIsValid(current => ({
        ...current,
        [field]: validateFields(value, field),
      }));
    }
  };

  const errorName = touched.name || errors.name;
  const errorEmail = touched.email || errors.email;
  const errorPhone = touched.phone || errors.phone;

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <FormField
        type="text"
        name="name"
        value={name!}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errorName}
        isValid={isValid.name}
      />

      <FormField
        type="email"
        name="email"
        value={email!}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errorEmail}
        isValid={isValid.email}
      />

      <FormField
        type="tel"
        name="phone"
        value={phone!}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errorPhone}
        isValid={isValid.phone}
      />
      <div className="btn-group">
        <Button type={ButtonTypes.Submit} title="Continue" />
      </div>
    </form>
  )
}
