import classNames from 'classnames';
import React from 'react';
import { ButtonTypes } from '../types/ButtonTypes';

type Props = {
  type: ButtonTypes | undefined;
  title: string;
  handleClick?: () => void;
  isDisabled?: boolean
}

export const Button: React.FC<Props> = ({
  type,
  title,
  handleClick,
  isDisabled,
}) => {
  const handleBack = () => {
    // eslint-disable-next-line no-restricted-globals
    history.back();
  }

  const isBack = title === 'Back';

  return (
    <div className="row">
      <button
        type={type}
        className={classNames(
          "btn btn-primary col-4 col-sm-2",
          {'btn-continue': !isBack},
          {'btn-light' : isBack},
          { 'btn-disabled': isDisabled },
        )}
        data-cy="backButton"
        onClick={!isBack ? handleClick : handleBack}
        disabled={isDisabled}
      >
        {title}
      </button>
    </div>
  );
};
