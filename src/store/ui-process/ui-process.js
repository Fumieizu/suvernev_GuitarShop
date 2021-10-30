import {createReducer} from '@reduxjs/toolkit';
import {
  addPriceFrom,
  addPriceTo,
  addStringsCount,
  addToCartCount,
  addTypes,
  changeGuitarCount,
  changeSort,
  changeSortDirection,
  deleteFromTotal
} from '../actions';
import {addNewCount, changeCount, deleteId} from '../../utils';

const initialState = {
  sorting: '',
  sortDirection: '',
  strings: [],
  types: [],
  price: {
    from: '',
    to: '',
    total: [],
  },
};

const uiProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortDirection, (state, action) => {
      state.sortDirection = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
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
    .addCase(addToCartCount, (state, action) => {
      state.price.total = addNewCount(action.payload, state.price.total);
    })
    .addCase(changeGuitarCount, (state, action) => {
      state.price.total = changeCount(action.payload, state.price.total);
    })
    .addCase(deleteFromTotal, (state, action) => {
      state.price.total = deleteId(action.payload, state.price.total);
    });
});

export {uiProcess};
