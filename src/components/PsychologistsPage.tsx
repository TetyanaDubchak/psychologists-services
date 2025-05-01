import React, { useEffect, useState } from 'react';
import s from '@/styles/components/PsychologistsPage.module.scss';
import FiltersBlock from './FiltersBlock';
import PsychologistsList from './PsychologistsList';
import { usePsychologistsList } from '@/lib/store';

export default function PsychologistsPage() {
  const { psychologistsList } = usePsychologistsList();
  const [sortedList, setSortedList] = useState(psychologistsList);

  useEffect(() => {
    setSortedList(psychologistsList);
  }, [psychologistsList]);
  return (
    <div className={s['wrapper']}>
      <FiltersBlock changePsychologistList={setSortedList} />
      <PsychologistsList psychologistsList={sortedList} />
    </div>
  );
}
