import React from 'react';
import styles from './sort.module.scss';
import {SortOptions,SortButtons} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {changeSort,changeSortDirection} from '../../../store/actions';
import {selectSort, selectSortDirection} from '../../../store/ui-process/selectors';

export default function Sort() {
  const activeType = useSelector(selectSort);
  const activeDirection = useSelector(selectSortDirection);
  const dispatch = useDispatch();

  const changeSortType = (sort) => {
    dispatch(changeSort(sort));
  };

  const handleKeyDownSortType = (sortType, evt) => {
    if (evt.key === 'Enter') {
      changeSortType(sortType);
    }
  };

  const handleKeyDownSortDirection = (direction, evt) => {
    if (evt.key === 'Enter') {
      dispatch(changeSortDirection(direction));
    }
  };

  const changeDirection = (direction) => {
    if (!activeType) {
      dispatch(changeSort('price'));
      dispatch(changeSortDirection(direction));
    }
    dispatch(changeSortDirection(direction));
  };

  return (
    <section className={styles.sort}>
      <h2 className="visually-hidden">Сортировка товара</h2>
      <p className={styles.title}>Сортировать:</p>
      <ul className={styles.list}>
        {Object.entries(SortOptions).map(([name, vote]) => (
          <li
            key={name}
            className={`${styles.item} ${activeType === name.toLowerCase() ? styles.item__active : ''}`}
            onClick={() => changeSortType(name.toLowerCase())}
            onKeyDown={(evt) => handleKeyDownSortType(name.toLowerCase(), evt)}
            tabIndex="0"
          >
            {vote}
          </li>
        ))}
      </ul>
      <ul className={styles.direction_list}>
        <li
          className={`${styles.direction_item} ${activeDirection === SortButtons.FROM_LOW_TO_HIGH ? styles.direction_item__active : ''}`}
          onClick={() => changeDirection(SortButtons.FROM_LOW_TO_HIGH)}
          onKeyDown={(evt) => handleKeyDownSortDirection(SortButtons.FROM_LOW_TO_HIGH, evt)}
          tabIndex="0"
        />
        <li
          className={`${styles.direction_item} ${styles.direction_item__reverse} ${activeDirection === SortButtons.FROM_HIGH_TO_LOW ? styles.direction_item__active : ''}`}
          onClick={() => changeDirection(SortButtons.FROM_HIGH_TO_LOW)}
          onKeyDown={(evt) => handleKeyDownSortDirection(SortButtons.FROM_HIGH_TO_LOW, evt)}
          tabIndex="0"
        />
      </ul>
    </section>
  );
}
