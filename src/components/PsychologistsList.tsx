import React from 'react';
import { usePsychologistsList } from '@/lib/store';
import s from '@/styles/components/PsychologistsList.module.scss';
import PsychologistsItem from './PsychologistsItem';
import FiltersBlock from './FiltersBlock';

export default function PsychologistsList() {
  const { psychologistsList } = usePsychologistsList();
  return (
    <div className={s['wrapper']}>
      <FiltersBlock />
      {psychologistsList && (
        <ul className={s['list']}>
          {psychologistsList.map((item) => {
            return <PsychologistsItem key={item.id} psychologist={item} />;
          })}
        </ul>
      )}
    </div>
  );
}
