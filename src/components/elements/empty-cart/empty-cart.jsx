import React from 'react';
import styles from './empty-cart.module.scss';

export default function EmptyCart() {
  return (
    <h2 className={styles.title}>В корзине пока ничего нет 😟</h2>
  );
}
