'use client';
import React, { useState } from 'react';
import s from '../styles/components/FiltersBlock.module.scss';
import Icon from './Icon';

export interface FiltersBlockProps {
  children: React.ReactNode;
}

const filterList = [
  'A to Z',
  'Z to A',
  'Less than 10$',
  'Greater than 10$',
  'Popular',
  'Not popular',
  'Show all',
];

export default function FiltersBlock() {
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [filterItem, setFilterItem] = useState('Show all');

  const toggleFilterBox = () => {
    setIsFilterBoxOpen((prev) => !prev);
  };
  const handleChooseFilter = (text: string) => {
    setFilterItem(text);
  };

  return (
    <div className={s['main-wrapper']}>
      <p className={s['title']}>Filters</p>
      <button
        className={s['input-button']}
        type="button"
        onClick={toggleFilterBox}
      >
        {filterItem}
        <Icon
          clas={`${s['input-button-arrow']} ${!isFilterBoxOpen && s['input-button-arrow-open']}`}
          type="chevron-down"
        />
      </button>

      {isFilterBoxOpen && (
        <div className={s['filters-wrapper']}>
          {filterList.map((item, index) => {
            return (
              <button
                className={s['choose-button']}
                onClick={() => handleChooseFilter(item)}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
