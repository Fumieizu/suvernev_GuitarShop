import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Button({className, white, img, orange, gray, disabled, onClick, children, ...prop}) {
  const StyledButton = prop.to ? Link : 'button';

  return (
    <StyledButton
      className={`${styles.button} ${className} ${img ? styles.button__img : ''} ${gray ? styles.grey : ''}${white ? styles.white : ''} ${orange ? styles.orange : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...prop}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  white: PropTypes.bool,
  img: PropTypes.bool,
  children: PropTypes.string,
  gray: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  orange: PropTypes.bool,
};

