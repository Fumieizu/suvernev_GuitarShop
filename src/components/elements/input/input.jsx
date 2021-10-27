import React from 'react';
import styles from './input.module.scss';
import PropTypes from 'prop-types';

export default function Input({className, text = '', value, ...props}) {
  return (
    <label className={styles.label}>
      <input
        className={`${styles.input} ${!className ? 'visually-hidden' : className}`}
        value={value}
        {...props}
      />
      {
        text && <span className={styles.span}>{text}</span>
      }
    </label>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string,
  className: PropTypes.string,
};
