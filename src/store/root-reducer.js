import {combineReducers} from 'redux';
import {NameSpace} from '../const';
import {cart} from './cart/cart';
import {catalog} from './catalog/catalog';
import {uiProcess} from './ui-process/ui-process';

export default combineReducers({
  [NameSpace.CATALOG]: catalog,
  [NameSpace.CART]: cart,
  [NameSpace.PROCESS]: uiProcess,
});
