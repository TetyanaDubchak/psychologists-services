'use client';
import React, { useEffect, useState } from 'react';
import s from '@/styles/components/FavoritesPage.module.scss';
import FiltersBlock from './FiltersBlock';
import PsychologistsList from './PsychologistsList';
import { useUserStore, usePsychologistsList } from '@/lib/store';

export default function FavoritesPage() {
  const { psychologistsList } = usePsychologistsList();
  const [sortedList, setSortedList] = useState(psychologistsList);
  const favoritesObject = useUserStore((state) => state.user?.favorites);
  const favoritesList = favoritesObject && Object.keys(favoritesObject);
  const result = psychologistsList.filter((psychologist) =>
    favoritesList?.includes(psychologist.id),
  );

  useEffect(() => {
    setSortedList(result);
  }, [favoritesObject]);

  return (
    <div className={s['wrapper']}>
      <FiltersBlock
        changePsychologistList={setSortedList}
        listToChange={result}
      />
      <PsychologistsList psychologistsList={sortedList} />
    </div>
  );
}
