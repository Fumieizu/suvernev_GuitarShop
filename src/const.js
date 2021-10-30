export const AppRoute = {
  CATALOG: '/',
  CART: '/cart',
};

export const priceInputs = [
  {
    name: 'from',
    placeholder: '1 000',
  },
  {
    name: 'to',
    placeholder: '30 000',
  },
];

export const typesState = [
  {
    id: 1,
    label: 'Акустические гитары',
    value: 'акустическая гитара',
    isChecked: false,
    disabled: false,
    strings: ['6', '7', '12'],
  },
  {
    id: 2,
    label: 'Электрогитары',
    value: 'электрогитара',
    isChecked: false,
    disabled: false,
    strings: ['4', '6', '7'],
  },
  {
    id: 3,
    label: 'Укулеле',
    value: 'укулеле',
    isChecked: false,
    disabled: false,
    strings: ['4'],
  },
];

export const stringsState = [
  {id: 1, value: '4', label: '4', isChecked: false, disabled: false},
  {id: 2, value: '6', label: '6', isChecked: false, disabled: false},
  {id: 3, value: '7', label: '7', isChecked: false, disabled: false},
  {id: 4, value: '12', label: '12', isChecked: false, disabled: false},
];

export const SortOptions = {
  PRICE: 'по цене',
  VOTE: 'по популярности',
};

export const SortButtons = {
  FROM_LOW_TO_HIGH: 'вверх',
  FROM_HIGH_TO_LOW: 'вниз',
};

export const PromoCodes = {
  GITARAHIT: 'GITARAHIT',
  SUPERGITARA: 'SUPERGITARA',
  GITARA2020: 'GITARA2020',
};

export const NameSpace = {
  CATALOG: 'CATALOG',
  PROCESS: 'PROCESS',
  CART: 'CART',
};
