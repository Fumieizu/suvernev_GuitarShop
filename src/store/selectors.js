import {createSelector} from '@reduxjs/toolkit';
import {filterByPrice, filterByStrings, filterByType, SortingTypes, getTotalPriceCount} from '../utils';

export const selectArticles = (state) => state.articles;

export const selectSort = (state) => state.sorting;

export const selectSortDirection = (state) => state.sortDirection;

export const selectActiveArticle = (state) => state.activeArticle;

export const selectTotal = (state) => state.price.total;

export const selectTotalPrice = (state) => getTotalPriceCount(state.price.total);

export const selectCart = (state) => state.cart;

export const selectPrice = (state) => state.price;

export const selectStringsCount = (state) => state.strings;

export const selectTypes = (state) => state.types;


export const selectFilteredArticles = createSelector(selectArticles, selectPrice, selectStringsCount, selectTypes, (articles, price, strings, types) => (
  articles.filter((item) => {
    const filteredByPrice = filterByPrice(item, price);
    const filteredByTypes = filterByType(item, types);
    const filteredByStrings = filterByStrings(item, strings);
    return filteredByPrice && filteredByStrings && filteredByTypes;
  })
));

export const selectSortingArticles = createSelector(selectFilteredArticles, selectSort, selectSortDirection, (articles, activeSort, activeDirection) => (
  articles
    .slice()
    .sort(SortingTypes(activeSort, activeDirection))
));
