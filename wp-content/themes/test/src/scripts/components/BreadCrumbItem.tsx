import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  title: string | JSX.Element;
};

export const BreadCrumbItem: React.FC<Props> = ({ to, title }) => {
  return (
    <li className="breadcrumb-item">
      <NavLink
        aria-current="page"
        className={({ isActive }) => classNames(
          'breadcrumb-link',
          { 'breadcrumb-link--active': isActive },
        )}
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
};
