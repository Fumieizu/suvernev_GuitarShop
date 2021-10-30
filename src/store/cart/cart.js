import {createReducer} from '@reduxjs/toolkit';
import {addToCart, deleteFromCart} from '../actions';
import {addNewId, deleteId} from '../../utils';

const initialState = {
  cart: [],
};

const cart = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.cart = addNewId(action.payload, state.cart);
    })
    .addCase(deleteFromCart, (state, action) => {
      state.cart = deleteId(action.payload, state.cart);
    });
});

export {cart};
