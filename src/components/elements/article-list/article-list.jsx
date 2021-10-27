import React from 'react';
import styles from './article-list.module.scss';
import PropTypes from 'prop-types';
import Article from '../article/article';
import {useRouteMatch} from 'react-router-dom';
import {AppRoute} from '../../../const';
import CartArticle from '../cart-article/cart-article';
import {useSelector} from 'react-redux';
import {selectCart} from '../../../store/selectors';
import articleProps from '../article/article.props';

export default function ArticleList({articles}) {
  const {path} = useRouteMatch();
  const article = useSelector(selectCart);
  const cards = path === AppRoute.CART ? article : articles;

  return (
    <section>
      <h2 className="visually-hidden">Карточки товаров</h2>
      <ul className={`${path === AppRoute.CATALOG ? styles.catalog_list : ''} ${path === AppRoute.CART ? styles.cart_list : ''}`}>
        {
          cards.map((card) => (
            <li className={`${path === AppRoute.CATALOG ? styles.catalog_item : ''} ${path === AppRoute.CART ? styles.cart_item : ''}`}
              key={card.name}
            >
              {path === AppRoute.CATALOG && <Article article={card}/>}
              {path === AppRoute.CART && <CartArticle info={card}/>}
            </li>
          ))
        }
      </ul>
    </section>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(articleProps),
};
