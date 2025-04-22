import React from 'react';
import s from '@/styles/components/PsychologistsPage.module.scss';
import FiltersBlock from './FiltersBlock';
import PsychologistsList from './PsychologistsList';

export default function PsychologistsPage() {
  return (
    <div className={s['wrapper']}>
      <FiltersBlock />
      <PsychologistsList />
    </div>
  );
}
