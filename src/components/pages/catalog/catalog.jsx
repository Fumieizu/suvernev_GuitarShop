import React from 'react';
import styles from './catalog.module.scss';
import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';
import PageTitle from '../../elements/page-title/page-title';
import Filter from '../../elements/filter/filter';
import CatalogPreview from '../../elements/catalog-preview/catalog-preview';

export default function Catalog() {
  return (
    <>
      <Header/>
      <main className={styles.container}>
        <PageTitle/>
        <section className={styles.catalog}>
          <h2 className="visually-hidden">Ассортимент товаров</h2>
          <Filter/>
          <CatalogPreview/>
        </section>
      </main>

      <Footer/>
    </>
  );
}
