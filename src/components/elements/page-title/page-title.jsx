import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import styles from './page-title.module.scss';
import {AppRoute} from '../../../const';

const BreadcrumbsLinks = [
  {
    text: 'Главная',
    link: '',
  },
  {
    text: 'Каталог',
    link: AppRoute.CATALOG,
  },
  {
    text: 'Оформляем',
    link: AppRoute.CART,
  },
];

export default function PageTitle() {
  const {path} = useRouteMatch();

  const currentPage = () => {
    switch (path) {
      case AppRoute.CATALOG:
        return 'Каталог гитар';
      case AppRoute.CART:
        return 'Корзина';
      default:
        break;
    }
  };

  const pageIndex = BreadcrumbsLinks.findIndex((item) => item.link === path);

  const pageLink = BreadcrumbsLinks.slice(0, pageIndex + 1);

  return (
    <section className={`${styles.wrapper} ${path === AppRoute.CART ? styles.wrapper_cart : ''}`}>
      <h1 className={styles.title}>{currentPage()}</h1>
      <ul className={styles.breadcrumbs_list}>
        {pageLink.map(({text, link}) => (
          <li className={styles.item} key={text}>
            {
              link !== path ? (
                <Link className={styles.link} to={link}>{text}</Link>
              ) : (
                <p className={styles.last_link}>{text}</p>
              )
            }
          </li>
        ))}
      </ul>
    </section>
  );
}
