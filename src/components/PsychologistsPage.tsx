import React from 'react';
import s from '@/styles/components/PsychologistsPage.module.scss';
import FiltersBlock from './FiltersBlock';
import PsychologistsList from './PsychologistsList';
import { usePsychologistsList } from '@/lib/store';

export default function PsychologistsPage() {
  const { psychologistsList } = usePsychologistsList();
  return (
    <div className={s['wrapper']}>
      <FiltersBlock />
      <PsychologistsList psychologistsList={psychologistsList} />
    </div>
  );
}
