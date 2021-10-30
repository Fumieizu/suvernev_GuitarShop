import {getTotalPriceCount} from '../../utils';
import {NameSpace} from '../../const';

export const selectSort = (state) => state[NameSpace.PROCESS].sorting;

export const selectSortDirection = (state) => state[NameSpace.PROCESS].sortDirection;

export const selectTotal = (state) => state[NameSpace.PROCESS].price.total;

export const selectTotalPrice = (state) => getTotalPriceCount(state[NameSpace.PROCESS].price.total);

export const selectPrice = (state) => state[NameSpace.PROCESS].price;

export const selectStringsCount = (state) => state[NameSpace.PROCESS].strings;

export const selectTypes = (state) => state[NameSpace.PROCESS].types;
