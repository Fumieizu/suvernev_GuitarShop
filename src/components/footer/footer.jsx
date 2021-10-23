import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import twitter from  '../../assets/img/twitter.svg';
import inst from '../../assets/img/inst.svg';
import facebook from '../../assets/img/facebook.svg';
import styles from './footer.module.scss';

const aboutUsText = [
  'Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.',
  'Все инструменты проверены, отстроены и доведены до идеала!',
];

const catalogLinks = [
  'Акустические гитары',
  'Классические гитары',
  'Электрогитары',
  'Бас-гитары',
  'Укулеле',
];

const infoLinks = [
  'Где купить?',
  'Блог',
  'Вопрос - ответ',
  'Возврат',
  'Сервис-Центры',
];

const socials = [
  {
    img: twitter,
    alt: 'Мы в twitter',
  },
  {
    img: inst,
    alt: 'Мы в instagram',
  },
  {
    img: facebook,
    alt: 'Мы в facebook',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <Logo isFooter/>
          <ul className={styles.social_list}>
            {socials.map(({img, alt}) => (
              <li className={styles.social_item} key={alt}>
                <Link className={styles.link} to="/">
                  <img src={img} alt={alt}/>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.about_us}>
            <h3 className={styles.title}>О нас</h3>
            <ul className={styles.list}>
              {aboutUsText.map((text) => (
                <li className={styles.about_us_item} key={text}>
                  <p className={styles.description}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.catalog}>
            <h3 className={styles.title}>Каталог</h3>
            <ul className={styles.list}>
              {catalogLinks.map((link) => (
                <li key={link}>
                  <Link className={styles.catalog_link} to="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Информация</h3>
            <ul className={styles.list}>
              {infoLinks.map((link) => (
                <li key={link}>
                  <Link className={styles.info_link} to="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <h3 className={styles.title}>Контакты</h3>
          <ul className={styles.list}>
            <li className={styles.contacts_item}>
              <address className={styles.address}>г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</address>
              <a className={styles.tel} href='tel:88125005050'>8-812-500-50-50</a>
            </li>
            <li className={styles.contacts_item}>
              <p className={styles.clock}>Режим работы:
                <span>с 11:00 до 20:00,</span> без выходных.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
