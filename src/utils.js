import {SortButtons} from './const';

const MAX_PERCENTAGE = 100;
const MAX_RATING = 5;

export const getRatingPercentage = (rating) => rating * MAX_PERCENTAGE / MAX_RATING;

export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return rand.toFixed(1);
};

export const makeNumberToString = (value) => value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ').trim();

export const findId = (array, id) => array.find((card) => card.id === id);

export const changeCount = (card, array) => {
  const index = array.findIndex((item) => item.id === card.id);

  if (index === -1) {
    return array;
  }

  return [...array.slice(0, index), card, ...array.slice(index + 1)];
};

export const deleteId = (card, array) => {
  const index = array.findIndex((item) => item.id === card.id);
  if (index === -1) {
    return;
  }

  array.splice(index, 1);
  return array;
};

export const addNewId = (card, array) => {
  const index = array.findIndex((item) => item.id === card.id);

  if (index === -1) {
    array.push(card);
    return array;
  }

  return array;
};

export const addNewCount = (card, array) => {
  const index = array.findIndex((item) => item.id === card.id);

  if (index === -1) {
    array.push({id: card.id, price: card.price, count: 1});
    return array;
  }

  return array.filter((item) => {
    if (item.id === card.id) {
      item.count = item.count + 1;
    }

    return item;
  });
};

export const filterByPrice = (item, price) => {
  const {from, to} = price;

  if (!from && !to) {
    return item;
  }
  if (!from) {
    return item.price <= to;
  }
  if (!to) {
    return item.price >= from;
  }
  return item.price >= from && item.price <= to;
};

export const filterByStrings = (item, strings) => {
  if (!strings.length) {
    return item;
  }

  return strings.some((string) => Number(string) === item.strings);
};

export const filterByType = (item, types) => {
  if (!types.length) {
    return item;
  }

  return types.some((type) => type.toLowerCase() === item.type.toLowerCase());
};

export const getTotalPriceCount = (total) => {
  let result = 0;

  total.forEach(({price, count}) => {
    const newPrice = count * price;
    return result += newPrice;
  });

  return result;
};

export const SortingTypes = (sortType, sortDirection) => {
  if (sortDirection === SortButtons.FROM_HIGH_TO_LOW) {
    return (a, b) => b[sortType] - a[sortType];
  }
  return (a, b) => a[sortType] - b[sortType];
};
