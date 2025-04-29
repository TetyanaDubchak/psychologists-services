'use client';
import React from 'react';
import s from '@/styles/components/FavoritesPage.module.scss';
import FiltersBlock from './FiltersBlock';
import PsychologistsList from './PsychologistsList';
import { useUserStore, usePsychologistsList } from '@/lib/store';

export default function FavoritesPage() {
  const { psychologistsList } = usePsychologistsList();
  const favoritesObject = useUserStore((state) => state.user?.favorites);
  const favoritesList = favoritesObject && Object.keys(favoritesObject);
  const result = psychologistsList.filter((psychologist) =>
    favoritesList?.includes(psychologist.id),
  );
  console.log('Favorites', result);
  return (
    <div className={s['wrapper']}>
      <FiltersBlock />
      <PsychologistsList psychologistsList={result} />
    </div>
  );
}
