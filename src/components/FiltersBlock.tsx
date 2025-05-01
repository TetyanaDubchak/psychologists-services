'use client';
import React, { useState } from 'react';
import { handleSortStartEnd } from '@/lib/filtersFunction';
import s from '../styles/components/FiltersBlock.module.scss';
import Icon from './Icon';
import { usePsychologistsList } from '@/lib/store';
import { Psychologist } from '@/lib/stateTypes';

export interface FiltersBlockProps {
  changePsychologistList: (list: Psychologist[]) => void;
}

const filterList = [
  { label: 'atoz', content: 'A to Z' },
  { label: 'ztoa', content: 'Z to A' },
  { label: 'less100', content: 'Less than 10$' },
  { label: 'more100', content: 'Greater than 10$' },
  { label: 'popular', content: 'Popular' },
  { label: 'notpopular', content: 'Not popular' },
  { label: 'all', content: 'Show all' },
];

export default function FiltersBlock({
  changePsychologistList,
}: FiltersBlockProps) {
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [filterItem, setFilterItem] = useState('Show all');
  const { psychologistsList } = usePsychologistsList();

  const toggleFilterBox = () => {
    setIsFilterBoxOpen((prev) => !prev);
  };

  const handleChooseFilter = (e, text: string) => {
    const filterType = e.currentTarget.getAttribute('data-name');
    setFilterItem(text);
    console.dir(filterType);

    switch (filterType) {
      case 'atoz':
        changePsychologistList(handleSortStartEnd(psychologistsList));
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
