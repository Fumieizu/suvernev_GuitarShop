import React, {useState, useEffect} from 'react';
import Sort from '../sort/sort';
import ArticleList from '../article-list/article-list';
import Pagination from '../../pagination/pagination';
import {useSelector} from 'react-redux';
import {selectSortingArticles} from '../../../store/catalog/selectors';

const INIT_PAGE = 1;
const MAX_ARTICLE_COUNT = 9;

export default function CatalogPreview() {
  const articles = useSelector(selectSortingArticles);
  const [currentPage, setCurrentPage] = useState(INIT_PAGE);
  const [articlesPerPage] = useState(MAX_ARTICLE_COUNT);

  useEffect(() => {
    const pageCount = Math.ceil(articles.length / articlesPerPage);

    if (pageCount < currentPage) {
      const pages = pageCount - INIT_PAGE;
      setCurrentPage(pageCount - pages);
    }
  }, [articles, articlesPerPage, currentPage]);

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex);

  const paginate = (pageNumber) => {
    if (pageNumber === currentPage) {
      return;
    }

    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev === (Math.ceil(articles.length / articlesPerPage)) ? (Math.ceil(articles.length / articlesPerPage)) : prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev === 1 ? 1 : prev - 1);
  };

  return (
    <div>
      <Sort/>
      <ArticleList articles={currentArticles}/>
      <Pagination
        articles={articles.length}
        articlesPerPage={articlesPerPage}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}
