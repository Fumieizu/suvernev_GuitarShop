import {createSelector} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {filterByPrice, filterByStrings, filterByType, SortingTypes} from '../../utils';
import {selectPrice, selectSort, selectSortDirection, selectStringsCount, selectTypes} from '../ui-process/selectors';


export const selectArticles = (state) => state[NameSpace.CATALOG].articles;

export const selectActiveArticle = (state) => state[NameSpace.CATALOG].activeArticle;

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
