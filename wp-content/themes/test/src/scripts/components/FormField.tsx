import classNames from 'classnames';
import React from 'react';

type Props = {
  type: string;
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (value: string, field: string) => void;
  error: boolean;
  isValid?: boolean;
};

export const FormField: React.FC<Props> = ({
  type,
  name,
  value,
  handleChange,
  handleBlur,
  error,
  isValid,
}) => {
  const isRequired = name === 'email' || name === 'quantity';
  const title = name.slice(0, 1).toUpperCase() + name.slice(1);

  return (
    <div className="form-field">
      <div className="form-group">
        <label
          htmlFor={name}
          className="form-label"
        >
          {title}
          {isRequired && <sup>required</sup>}
        </label>
        <input
          type={type}
          name={name}
          className={classNames(
            "form-control",
            {'form-border-error': error || isValid})}
          id={name}
          value={value}
          onChange={handleChange}
          onBlur={() => handleBlur(value, `${name}`)}
        />
      </div>
      <div className="form-error" data-cy="ErrorMessage">
        {error && `${title} is required`}
        {isValid && !error && `${title} is not valid`}
      </div>
    </div>
  );
};
