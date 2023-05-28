import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Form } from '../components';

export const ContactInfo: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const isContact = path === '';
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Breadcrumbs />

          <h1>
            {isContact ? 'Contact Info' : title}
          </h1>

          <Form />
        </div>
      </div>
    </div>
  );
};
