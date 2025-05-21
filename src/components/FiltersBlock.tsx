'use client';
import React, { useState } from 'react';
import {
  handleSortStartEnd,
  handleSortEndStart,
  handleFilterLess150,
  handleFilterGreater150,
  handleSortPopular,
  handleSortNotPopular,
} from '@/lib/filtersFunction';
import s from '../styles/components/FiltersBlock.module.scss';
import Icon from './Icon';
import { usePsychologistsList } from '@/lib/store';
import { Psychologist } from '@/lib/stateTypes';

export interface FiltersBlockProps {
  changePsychologistList: (list: Psychologist[]) => void;
  listToChange: Psychologist[];
}

const filterList = [
  { label: 'atoz', content: 'A to Z' },
  { label: 'ztoa', content: 'Z to A' },
  { label: 'less150', content: 'Less than 150$' },
  { label: 'more150', content: 'Greater than 150$' },
  { label: 'popular', content: 'Popular' },
  { label: 'notpopular', content: 'Not popular' },
  { label: 'all', content: 'Show all' },
];

export default function FiltersBlock({
  changePsychologistList,
  listToChange,
}: FiltersBlockProps) {
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [filterItem, setFilterItem] = useState('Show all');

  const toggleFilterBox = () => {
    setIsFilterBoxOpen((prev) => !prev);
  };

  const handleChooseFilter = (e, text: string) => {
    const filterType = e.currentTarget.getAttribute('data-name');
    setFilterItem(text);
    console.dir(filterType);

    switch (filterType) {
      case 'atoz':
        changePsychologistList(handleSortStartEnd(listToChange));
        break;
      case 'ztoa':
        changePsychologistList(handleSortEndStart(listToChange));
        break;
      case 'less150':
        changePsychologistList(handleFilterLess150(listToChange));
        break;
      case 'more150':
        changePsychologistList(handleFilterGreater150(listToChange));
        break;
      case 'popular':
        changePsychologistList(handleSortPopular(listToChange));
        break;
      case 'notpopular':
        changePsychologistList(handleSortNotPopular(listToChange));
        break;
      case 'all':
        changePsychologistList(listToChange);
        break;
    }
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
                data-name={item.label}
                className={s['choose-button']}
                onClick={(e) => handleChooseFilter(e, item.content)}
                key={index}
              >
                {item.content}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
