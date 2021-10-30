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
          <ReactStars
            classNames={styles.stars}
            count={RATING_COUNT}
            filledIcon={<svg width="10" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.64 4.14 6.67 3.7 5.34 1a.38.38 0 0 0-.67 0L3.32 3.7l-2.97.43a.37.37 0 0 0-.2.64l2.14 2.1-.5 2.96a.37.37 0 0 0 .54.4L5 8.84l2.66 1.4c.07.03.16.05.24.03.2-.03.34-.23.3-.43l-.5-2.96 2.15-2.1a.37.37 0 0 0-.2-.64Z" fill="#FFD168"/></svg>}
            halfIcon={<svg width="10" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.51 9.82a.44.44 0 0 0 .1.4c.04.06.1.1.17.13a.53.53 0 0 0 .5-.03L6 8.62l2.72 1.7a.52.52 0 0 0 .57-.01.47.47 0 0 0 .18-.23.44.44 0 0 0 .01-.28l-.91-3 2.26-1.92a.47.47 0 0 0 .15-.24.44.44 0 0 0 0-.26.47.47 0 0 0-.17-.22.52.52 0 0 0-.27-.1l-2.85-.22-1.23-2.56a.48.48 0 0 0-.19-.2.52.52 0 0 0-.54 0 .48.48 0 0 0-.19.2L4.31 3.84l-2.85.22c-.1 0-.19.04-.26.1a.47.47 0 0 0-.17.2.44.44 0 0 0-.02.27c.02.09.07.17.14.23l2.1 1.93-.74 3.03ZM6 2.62l1.02 2.12.3.02 1.98.15-1.63 1.38-.24.2.09.28.63 2.06L6 7.49V2.6Z" fill="#FFD168"/></svg>}
            emptyIcon={<svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9.4 3.15-2.71-.4L5.49.34a.6.6 0 0 0-1.07 0l-1.2 2.43-2.71.39a.59.59 0 0 0-.33 1l1.96 1.9-.47 2.66a.6.6 0 0 0 .86.62l2.42-1.26 2.42 1.26a.6.6 0 0 0 .86-.62l-.47-2.67 1.96-1.89a.59.59 0 0 0-.33-1ZM6.8 5.73l.44 2.54-2.3-1.2-2.3 1.2.44-2.54-1.86-1.8 2.57-.37 1.15-2.31L6.1 3.56l2.57.37-1.86 1.8Z" fill="#FFD168"/></svg>}
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
