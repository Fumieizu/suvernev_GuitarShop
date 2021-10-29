import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import cart from '../../../assets/img/cart.svg';
import pin from '../../../assets/img/pin.svg';
import search from '../../../assets/img/search.svg';
import {AppRoute} from '../../../const';
import styles from './header.module.scss';
import {useSelector} from 'react-redux';
import {selectCart} from '../../../store/selectors';

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
  const cartCount = useSelector(selectCart);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Logo/>
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
                    <img src={img} width="14" height="17" alt={alt}/>
                  </Link>
                  {alt === 'Cart' && <span className={styles.cart_count}>{cartCount.length}</span>}
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}
