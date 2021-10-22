import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../assets/img/header-logo.svg';
import cart from '../../../assets/img/cart.svg';
import pin from '../../../assets/img/pin.svg';
import search from '../../../assets/img/search.svg';
import {AppRoute} from '../../../const';
import styles from './header.module.scss';

const links = [
  'Каталог',
  'Где купить?',
  'О компании',
  'Сервис-центры',
];

const userMenuLinks = [
  {
    alt: 'Map',
    img: pin,
    link: '/',
  },
  {
    alt: 'Search',
    img: search,
    link: '/',
  },
  {
    alt: 'Cart',
    img: cart,
    link: AppRoute.CART,
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/">
            <img src={logo} width="67" height="70" alt="Логотип Guitar Shop"/>
          </Link>
          <ul className={styles.site_menu}>
            {
              links.map((link) => (
                <li key={link} className={styles.site_menu_item}>
                  <Link to="/" className={styles.link}>
                    {link}
                  </Link>
                </li>
              ))
            }
          </ul>
          <ul className={styles.user_menu}>
            {
              userMenuLinks.map(({alt, img, link}) => (
                <li key={alt} className={styles.user_menu_item}>
                  <Link to={link}>
                    <img src={img} alt={alt}/>
                  </Link>
                  {alt === 'Cart' && <span className={styles.cart_count}>0</span>}
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}
