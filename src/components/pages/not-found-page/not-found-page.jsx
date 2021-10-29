import React from 'react';
import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';
import styles from './not-found-page.module.scss';


export default function NotFoundPage() {
  return (
    <>
      <Header/>
      <h1 className={styles.title}>Приносим извинения! Страница находится в разработке.</h1>
      <Footer/>
    </>
  );
}
