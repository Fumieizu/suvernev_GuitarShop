import React, {useEffect, useState} from 'react';
import styles from './order-form.module.scss';
import {useSelector} from 'react-redux';
import {selectTotalPrice} from '../../../store/selectors';
import Button from '../button/button';
import Input from '../input/input';
import {makeNumberToString} from '../../../utils';
import {PromoCodes} from '../../../const';

const MAX_LENGTH = 11;

export default function OrderForm() {
  const totalPrice = useSelector(selectTotalPrice);
  const [price, setPrice] = useState(totalPrice);
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState(false);

  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);

  const handleInputChange = (evt) => {
    const {value} = evt.target;

    if (value.length > MAX_LENGTH) {
      return;
    }

    setPromoCode(value.trim());
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const guitarHitDiscount = totalPrice - (totalPrice * 10 / 100);

    const superGitaraDiscount = totalPrice - 700;

    const gitara2020Discount = (totalPrice * 30 / 100) <= 3000 ? totalPrice - (totalPrice * 30 / 100) : totalPrice - 3000;

    switch (promoCode) {
      case PromoCodes.GITARAHIT:
        setPrice(guitarHitDiscount);
        setPromoError(false);
        break;

      case PromoCodes.SUPERGITARA:
        setPrice(superGitaraDiscount);
        setPromoError(false);
        break;

      case PromoCodes.GITARA2020:
        setPrice(gitara2020Discount);
        setPromoError(false);
        break;

      default:
        setPrice(totalPrice);
        setPromoError(true);
    }
  };

  return (
    <section className={styles.order}>
      <h2 className="visually-hidden">Оформить заказ</h2>
      <div>
        <p className={styles.title}>Промокод на скидку</p>
        <p className={styles.description}>Введите свой промокод если он у вас есть</p>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Input
            className={styles.input}
            type="text"
            value={promoCode}
            onChange={handleInputChange}
          />
          <Button
            className={styles.button}
            gray
            type='submit'
          >
            Применить купон
          </Button>
          {
            promoError &&
            <span className={styles.error}>
              Промокод недействителен
            </span>
          }
        </form>
      </div>
      <div className={styles.right}>
        <p className={styles.price}>Всего: {makeNumberToString(price)} ₽ </p>
        <Button
          className={`${styles.button} ${styles.button__order}`}
          orange
          type="button"
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
