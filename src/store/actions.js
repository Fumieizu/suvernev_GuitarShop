import {createAction} from '@reduxjs/toolkit';

const ActionsTypes = {
  ADD_PRICE_FROM: 'addPriceFrom',
  ADD_PRICE_TO: 'addPriceTo',
  ADD_STRINGS_COUNT: 'addStringsCount',
  ADD_TYPES: 'addTypes',
  ADD_TO_CART: 'addToCart',
  ADD_TO_CART_COUNT: 'addToCartCount',
  CHANGE_SORT_DIRECTION: 'changeSortDirection',
  CHANGE_SORT: 'changeSort',
  ADD_ACTIVE_ARTICLE: 'addActiveArticle',
  CHANGE_GUITAR_COUNT: 'changeGuitarCount',
  DELETE_FROM_CART: 'deleteFromCart',
  DELETE_FROM_TOTAL: 'deleteFromTotal',
};

export const addPriceFrom = createAction(ActionsTypes.ADD_PRICE_FROM, (payload) => ({
  payload,
}));

export const addPriceTo = createAction(ActionsTypes.ADD_PRICE_TO, (payload) => ({
  payload,
}));

export const addStringsCount = createAction(ActionsTypes.ADD_STRINGS_COUNT, (payload) => ({
  payload,
}));

export const addTypes = createAction(ActionsTypes.ADD_TYPES, (payload) => ({
  payload,
}));

export const addToCart = createAction(ActionsTypes.ADD_TO_CART, (payload) => ({
  payload,
}));

export const addToCartCount = createAction(ActionsTypes.ADD_TO_CART_COUNT, (payload) => ({
  payload,
}));

export const changeSortDirection = createAction(ActionsTypes.CHANGE_SORT_DIRECTION, (payload) => ({
  payload,
}));

export const changeSort = createAction(ActionsTypes.CHANGE_SORT, (payload) => ({
  payload,
}));

export const addActiveArticle = createAction(ActionsTypes.ADD_ACTIVE_ARTICLE, (payload) => ({
  payload,
}));

export const changeGuitarCount = createAction(ActionsTypes.CHANGE_GUITAR_COUNT, (payload) => ({
  payload,
}));

export const deleteFromCart = createAction(ActionsTypes.DELETE_FROM_CART, (payload) => ({
  payload,
}));

export const deleteFromTotal = createAction(ActionsTypes.DELETE_FROM_TOTAL, (payload) => ({
  payload,
}));
