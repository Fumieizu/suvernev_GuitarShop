import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import './assets/styles/index.scss';
import rootReducer from './store/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from '@reduxjs/toolkit';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
