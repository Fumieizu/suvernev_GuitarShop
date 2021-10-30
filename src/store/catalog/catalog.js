import {createReducer} from '@reduxjs/toolkit';
import {articles} from '../../mock';
import {addActiveArticle} from '../actions';
import {findId} from '../../utils';

const initialState  = {
  articles: articles,
  activeArticle: '',
};

const catalog = createReducer(initialState, (builder) => {
  builder
    .addCase(addActiveArticle, (state, action) => {
      state.activeArticle = findId(state.articles, action.payload);
    });
});

export {catalog};
