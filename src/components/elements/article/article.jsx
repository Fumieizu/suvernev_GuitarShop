import React, {useState} from 'react';
import styles from './article.module.scss';
import Button from '../button/button';
import {makeNumberToString, getRatingPercentage} from '../../../utils';
import {useDispatch} from 'react-redux';
import {addActiveArticle} from '../../../store/actions';
import articleProps from './article.props';
import Modal from '../modal/modal';

export default function Article({article}) {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const {id, name, price, rating, vote, img} = article;

  const onClick = (articleId) => {
    setModalOpen(true);
    dispatch(addActiveArticle(articleId));
  };

  return (
    <article className={styles.article} id={id}>
      <div className={styles.img_wrapper}>
        <img
          className={styles.img}
          src={img}
          alt={`Изображение ${name}`}
          width="68"
          height="190"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.rating}>
          <span className={styles.rating_span} style={{width: `${getRatingPercentage(rating)}%`}}/>
          <span className={styles.count}>{vote}</span>
        </div>
        <div className={styles.about}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>{makeNumberToString(price)} ₽</p>
        </div>
        <div className={styles.controls}>
          <Button gray className={styles.link}>
            Подробнее
          </Button>
          <Button
            className={styles.button}
            orange
            img
            type="button"
            onClick={() => onClick(id)}
          >
            Купить
          </Button>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}/>}
    </article>
  );
}

Article.propTypes = {
  article: articleProps,
};
