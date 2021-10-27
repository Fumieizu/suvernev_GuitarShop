import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import styles from './article.module.scss';
import Button from '../button/button';
import {makeNumberToString} from '../../../utils';
import {useDispatch} from 'react-redux';
import {addActiveArticle} from '../../../store/actions';
import articleProps from './article.props';
import Modal from '../modal/modal';

const YELLOW = '#ffd168';
const RATING_SIZE = 15;
const RATING_COUNT = 5;

export default function Article({article}) {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const {id, name, price, rating, vote, img} = article;

  const handleClick = (articleId) => {
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
          <ReactStars
            classNames={styles.stars}
            count={RATING_COUNT}
            size={RATING_SIZE}
            edit={false}
            activeColor={YELLOW}
            value={Number(rating)}
            isHalf
          />
          <span className={styles.count}>{vote}</span>
        </div>
        <div className={styles.about}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>{makeNumberToString(price)} ₽</p>
        </div>
        <div className={styles.controls}>
          <Button gray href="/" className={styles.link}>
            Подробнее
          </Button>
          <Button
            className={styles.button}
            orange
            img
            type="button"
            onClick={() => handleClick(id)}
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
