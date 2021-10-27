import React from 'react';
import styles from './cart.module.scss';
import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';
import PageTitle from '../../elements/page-title/page-title';
import ArticleList from '../../elements/article-list/article-list';
import OrderForm from '../../elements/order-form/order-form';
import EmptyCart from '../../elements/empty-cart/empty-cart';
import {useSelector} from 'react-redux';
import {selectCart} from '../../../store/selectors';

export default function Cart() {
  const article = useSelector(selectCart);

  return (
    <>
      <Header/>
      <main className={styles.container}>
        <PageTitle/>
        {
          article.length === 0 ?
            <EmptyCart/> :
            <>
              <ArticleList/>
              <OrderForm/>
            </>
        }
      </main>

      <Footer/>
    </>
  );
}
