import React, {useEffect, useState} from 'react';
import styles from './cart-article.module.scss';
import PropTypes from 'prop-types';
import {useRouteMatch} from 'react-router-dom';
import {AppRoute} from '../../../const';
import {makeNumberToString} from '../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import articleProps from '../article/article.props';
import Button from '../button/button';
import Input from '../input/input';
import Modal from '../modal/modal';
import {addActiveArticle, changeGuitarCount, deleteFromCart, deleteFromTotal} from '../../../store/actions';
import {selectTotal} from '../../../store/selectors';

const CartImgSize = {
  WIDTH: '48',
  HEIGHT: '124',
};

const PopupImgSize = {
  WIDTH: '56',
  HEIGHT: '128',
};

const MAX_COUNT = 10;
const MIN_COUNT = 1;

export default function CartArticle({info, popup, handleAddToCartClick, handleCloseModalClick}) {
  const {id, name, price, img, type, strings, article} = info;
  const totalPrice = useSelector(selectTotal);
  const dispatch = useDispatch();
  const {path} = useRouteMatch();
  const activeId = totalPrice.find((item) => item.id === id);
  const [guitarCount, setGuitarCount] = useState(activeId ? activeId.count : MIN_COUNT);
  const [prevGuitarCount, setPrevGuitarCount] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const isCart = !popup;
  const imageWidth = (isCart && CartImgSize) || (popup && PopupImgSize);

  useEffect(() => {
    dispatch(changeGuitarCount({id: id, price: price, count: guitarCount}));
  }, [guitarCount, dispatch, id, price]);

  const handleGuitarCountPlus = () => {
    setGuitarCount((prev) => prev === MAX_COUNT ? MAX_COUNT : +prev + MIN_COUNT);
  };

  const handleGuitarCountMinus = () => {
    setGuitarCount((prev) => prev === MIN_COUNT ? MIN_COUNT : +prev - MIN_COUNT);
    dispatch(addActiveArticle(id));
    if (guitarCount === 1) {
      setModalOpen(true);
    }
  };

  const handleInputChange = (e) => {
    const {value} = e.target;
    const inputValue = +value.trim();

    if (isNaN(inputValue)) {
      return;
    }

    if (inputValue >= 1 || inputValue <= 10) {
      setGuitarCount(inputValue);
    }

    if (inputValue < 1) {
      setGuitarCount(1);
    }

    if (inputValue > 10) {
      setGuitarCount(10);
    }
  };

  const handleInputClick = () => {
    setPrevGuitarCount(guitarCount);
    setGuitarCount('');
  };

  const handleInputBlur = () => {
    if (!guitarCount) {
      setGuitarCount(prevGuitarCount);
      setPrevGuitarCount('');
    }
  };

  const deleteArticleFromCart = () => {
    dispatch(deleteFromCart(info));
    dispatch(deleteFromTotal(info));
  };

  const priceElement = (
    <p className={`${styles.price} ${popup ? styles.price__popup : ''}`}>
      {popup && 'Цена: '} {makeNumberToString(price)} ₽
    </p>
  );

  const guitarCountModifyElement = (
    <>
      <div className={styles.control}>
        <button
          className={`${styles.button} ${styles.button_minus}`}
          type="button"
          onClick={handleGuitarCountMinus}
        />
        <Input
          className={styles.count}
          value={guitarCount}
          onChange={handleInputChange}
          type='text'
          onClick={handleInputClick}
          onBlur={handleInputBlur}
        />
        <button
          className={`${styles.button} ${styles.button_plus}`}
          type="button"
          onClick={handleGuitarCountPlus}
        />
      </div>
      <p className={styles.total}>{makeNumberToString(guitarCount * price)} ₽</p>
    </>
  );

  const addToCartButtonElement = (
    <div className={styles.button_wrapper}>
      <Button
        className={styles.buy}
        orange
        onClick={path === AppRoute.CART ? deleteArticleFromCart : handleAddToCartClick}
      >
        {path === AppRoute.CART ? 'Удалить товар?' : 'Добавить в корзину'}
      </Button>
      {
        popup && path === AppRoute.CART &&
          <Button
            white
            to={AppRoute.CATALOG}
            className={styles.buy}
            onClick={handleCloseModalClick}
          >
            Продолжить покупки
          </Button>
      }
    </div>
  );

  return (
    <article className={`${isCart ? styles.article : ''} ${popup ? styles.wrapper : ''}`} id={id}>
      {
        isCart &&
        <button
          className={styles.close}
          type="button"
          onClick={deleteArticleFromCart}
        />
      }
      <div className={`${styles.img} ${popup ? styles.img__popup : ''}`}>
        <img src={img} width={imageWidth.WIDTH} height={imageWidth.HEIGHT} alt={`Гитара${name}`}/>
      </div>
      <div className={`${styles.inner} ${popup ? styles.inner__popup : ''}`}>
        <div className={`${styles.info} ${popup ? styles.info__popup : ''}`}>
          <h3 className={styles.title}>
            {(isCart && type) || (popup && 'Гитара')} {name}
          </h3>
          <p className={styles.number}>Артикул: {article}</p>
          <p className={`${styles.description} ${popup ? styles.description__popup : ''}`}>
            {type}, {strings} струнная
          </p>
          {popup && priceElement}
        </div>
        {popup && addToCartButtonElement}
        {isCart && priceElement}
        {isCart && guitarCountModifyElement}
      </div>
      {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </article>
  );
}

CartArticle.propTypes = {
  handleCloseModalClick: PropTypes.func,
  handleAddToCartClick: PropTypes.func,
  popup: PropTypes.bool,
  info: articleProps,
};
