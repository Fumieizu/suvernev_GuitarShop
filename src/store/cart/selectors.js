import {NameSpace} from '../../const';

export const selectCart = (state) => state[NameSpace.CART].cart;
