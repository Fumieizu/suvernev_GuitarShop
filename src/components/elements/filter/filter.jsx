import React, {useState, useEffect} from 'react';
import Input from '../input/input';
import {priceInputs, typesState, stringsState} from '../../../const';
import styles from './filter.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {selectArticles} from '../../../store/catalog/selectors';
import {addPriceFrom, addPriceTo, addStringsCount, addTypes} from '../../../store/actions';

export default function Filter() {
  const [strings, setStrings] = useState(stringsState);
  const [priceTo, setPriceTo] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [types, setTypes] = useState(typesState);

  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);

  const maxPrice = articles.reduce((acc, current) => {
    if (current.price > acc) {
      acc = current.price;
    }

    return acc;
  }, 0);

  const minPrice = articles.reduce((acc, current, index) => {
    if (index === 1) {
      acc = current.price;
    }

    if (index > 1 && current.price < acc) {
      acc = current.price;
    }

    return acc;
  }, 0);

  useEffect(() => {
    const activeTypes = types.filter((item) => item.isChecked);

    const activeStrings = activeTypes.reduce((acc, current) => {
      acc.push(...current.strings);
      return acc;
    }, []);

    const activeStringsState = new Set(activeStrings);

    setStrings((prev) => prev.map((item) => {
      item.disabled = !activeStringsState.has(item.value);

      if (!activeStringsState.size) {
        item.disabled = false;
      }

      if (item.disabled) {
        item.isChecked = false;
      }

      return item;
    }));

  }, [types]);

  useEffect(() => {
    dispatch(addPriceFrom(priceFrom));

    dispatch(addPriceTo(priceTo));

    const stringArray = [];

    strings.forEach((item) => {
      if (item.isChecked) {
        stringArray.push(item.value);
      }
    });

    const typesArray = [];

    types.forEach((item) => {
      if (item.isChecked) {
        typesArray.push(item.value);
      }
    });

    dispatch(addStringsCount(stringArray));

    dispatch(addTypes(typesArray));
  }, [dispatch, priceFrom, priceTo, strings, types]);

  const handlePriceChange = (evt) => {
    const {name, value} = evt.target;
    if (isNaN(value) || value.length > '7') {
      return;
    }

    if (name === 'from') {
      setPriceFrom(value);
    }

    if (name === 'to') {
      setPriceTo(value);
    }
  };

  const handlePriceBlue = (evt) => {
    const {name} = evt.target;

    if (+priceFrom > +priceTo && name === 'from' && priceTo) {
      setPriceFrom(priceTo);
    }

    if (priceFrom < minPrice && priceFrom) {
      setPriceFrom(minPrice);
    }

    if (+priceTo < +priceFrom && name === 'to' && priceFrom) {
      setPriceTo(priceFrom);
    }

    if (priceTo > maxPrice && priceTo) {
      setPriceTo(maxPrice);
    }
  };

  const handleStringsChange = (evt) => {
    const {checked, value} = evt.target;

    const arr = strings.slice();

    arr.forEach((item) => {
      if (item.value === value) {
        item.isChecked = checked;
      }
    });

    setStrings(arr);
  };

  const handleTypesChange = (evt) => {
    const {checked, value} = evt.target;
    const arr = types.slice();

    arr.forEach((item) => {
      if (item.value === value) {
        item.isChecked = checked;
      }
    });

    setTypes(arr);
  };


  return (
    <section>
      <h2 className={styles.title}>Фильтр</h2>
      <form action="" method="post">
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Цена, ₽</legend>
          <ul className={styles.price_list}>
            {
              priceInputs.map(({name, placeholder}) => (
                <li key={name} className={styles.price_item}>
                  <Input
                    type='text'
                    className={styles.price_input}
                    onChange={handlePriceChange}
                    onBlur={handlePriceBlue}
                    name={name}
                    value={name === 'from' ? priceFrom : priceTo}
                    placeholder={name === 'from' ? minPrice : maxPrice}
                  />
                </li>
              ))
            }
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Тип гитар</legend>
          <ul className={styles.checkbox_list}>
            {
              typesState.map(({id, label, value, isChecked, disabled}) => (
                <li key={id} className={styles.checkbox_item}>
                  <Input
                    onChange={handleTypesChange}
                    type='checkbox'
                    name='type'
                    value={value}
                    text={label}
                    checked={isChecked}
                    disabled={disabled}
                  />
                </li>
              ))
            }
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Количество струн</legend>
          <ul className={styles.checkbox_list}>
            {
              strings.map(({id, value, label, isChecked, disabled}) => (
                <li key={id} className={styles.checkbox_item}>
                  <Input
                    onChange={handleStringsChange}
                    value={value}
                    text={label}
                    type='checkbox'
                    name='string'
                    checked={isChecked}
                    disabled={disabled}
                  />
                </li>
              ))
            }
          </ul>
        </fieldset>
      </form>
    </section>
  );
}
