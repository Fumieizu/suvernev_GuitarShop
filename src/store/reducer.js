import {createReducer} from '@reduxjs/toolkit';
import {articles} from '../mock';
import {
  changeSortDirection,
  changeSort,
  addActiveArticle,
  changeGuitarCount,
  deleteFromCart,
  deleteFromTotal,
  addToCart,
  addToCartCount,
  addPriceTo,
  addPriceFrom,
  addStringsCount,
  addTypes
} from './actions';
import {
  findId,
  changeCount,
  deleteId,
  addNewId,
  addNewCount
} from '../utils';

const initialState  = {
  articles: articles,
  activeArticle: '',
  sorting: '',
  sortDirection: 'вверх',
  strings: [],
  types: [],
  price: {
    from: '',
    to: '',
    total: [],
  },
  cart: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortDirection, (state, action) => {
      state.sortDirection = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(addActiveArticle, (state, action) => {
      state.activeArticle = findId(state.articles, action.payload);
    })
    .addCase(addPriceTo, (state, action) => {
      state.price.to = action.payload;
    })
    .addCase(addPriceFrom, (state, action) => {
      state.price.from = action.payload;
    })
    .addCase(addStringsCount, (state, action) => {
      state.strings = action.payload;
    })
    .addCase(addTypes, (state, action) => {
      state.types = action.payload;
    })
    .addCase(addToCart, (state, action) => {
      state.cart = addNewId(action.payload, state.cart);
    })
    .addCase(addToCartCount, (state, action) => {
      state.price.total = addNewCount(action.payload, state.price.total);
    })
    .addCase(changeGuitarCount, (state, action) => {
      state.price.total = changeCount(action.payload, state.price.total);
    })
    .addCase(deleteFromCart, (state, action) => {
      state.cart = deleteId(action.payload, state.cart);
    })
    .addCase(deleteFromTotal, (state, action) => {
      state.price.total = deleteId(action.payload, state.price.total);
    });
});

export default reducer;
