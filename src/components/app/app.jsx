import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AppRoute} from '../../const';
import Cart from '../pages/cart/cart';
import Catalog from '../pages/catalog/catalog';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.CATALOG}>
          <Catalog/>
        </Route>
        <Route exact path={AppRoute.CART}>
          <Cart/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
