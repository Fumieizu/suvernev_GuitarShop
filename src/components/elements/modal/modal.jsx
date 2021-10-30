import React, {useState, useRef} from 'react';
import styles from './modal.module.scss';
import PropTypes from 'prop-types';
import {selectActiveArticle} from '../../../store/catalog/selectors';
import {useDispatch, useSelector} from 'react-redux';
import CartArticle from '../cart-article/cart-article';
import {addToCart, addToCartCount} from '../../../store/actions';
import ReactModal from 'react-modal';
import Button from '../button/button';
import {AppRoute} from '../../../const';
import {useRouteMatch} from 'react-router-dom';

ReactModal.setAppElement('#root');

export default function Modal({setModalOpen, modalOpen}) {
  const article = useSelector(selectActiveArticle);
  const dispatch = useDispatch();
  const buttonRef = useRef();
  const {path} = useRouteMatch();
  const [firstPopupState, setFirstPopupState] = useState(true);
  const [secondPopupState, setSecondPopupState] = useState(false);

  const onCloseModalClick = () => {
    setModalOpen(false);
  };

  const onAddToCartClick = () => {
    setFirstPopupState(false);
    setSecondPopupState(true);
    dispatch(addToCart(article));
    dispatch(addToCartCount(article));
  };

  const handleAfterOpen = () => {
    document.body.classList.add(styles.open);
    buttonRef.current.focus();
  };

  const handleAfterClose = () => {
    document.body.classList.remove(styles.open);
  };

  return (
    <ReactModal
      isOpen={modalOpen}
      contentLabel={'Добавить в корзину'}
      className={`${styles.content} ${secondPopupState ? styles.content__second : ''}`}
      overlayClassName={styles.modal}
      onRequestClose={onCloseModalClick}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
    >
      <section>
        <button
          className={styles.close}
          onClick={onCloseModalClick}
          ref={buttonRef}
          type="button"
        />
        {
          firstPopupState &&
            <>
              <h2 className={styles.title}>
                {path === AppRoute.CART ? 'Удалить этот товар' : 'Добавить товар в корзину'}
              </h2>
              <CartArticle
                popup
                info={article}
                onAddToCartClick={onAddToCartClick}
                onCloseModalClick={onCloseModalClick}
              />
            </>
        }
        {
          secondPopupState &&
            <>
              <h2 className={styles.title}>Товар успешно добавлен в корзину</h2>
              <div className={styles.controls}>
                <Button orange to={AppRoute.CART} className={`${styles.button} ${styles.button__left}`}>
                  Перейти в корзину
                </Button>
                <Button
                  white
                  className={styles.button}
                  onClick={onCloseModalClick}
                >
                  Продолжить покупки
                </Button>
              </div>
            </>
        }
      </section>
    </ReactModal>
  );
}

Modal.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};
