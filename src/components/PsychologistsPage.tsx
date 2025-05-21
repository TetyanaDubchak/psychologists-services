'use client';
import React, { useEffect, useState } from 'react';
import s from '@/styles/components/PsychologistsPage.module.scss';
import FiltersBlock from './FiltersBlock';
import PsychologistsList from './PsychologistsList';
import { usePsychologistsList } from '@/lib/store';
import { Psychologist } from '@/lib/stateTypes';

export interface PsychologistsPageProps {
  list: Psychologist[];
}

export default function PsychologistsPage({ list }: PsychologistsPageProps) {
  const { psychologistsList, setPsychologistsList } = usePsychologistsList();
  // const [isLoading, setIsLoading] = useState(false);
  const [sortedList, setSortedList] = useState(psychologistsList);
  useEffect(() => {
    setPsychologistsList(list);
  }, [setPsychologistsList, list]);

  useEffect(() => {
    setSortedList(psychologistsList);
  }, [psychologistsList]);

  return (
    <>
      {psychologistsList.length > 0 && (
        <div className={s['wrapper']}>
          <FiltersBlock
            changePsychologistList={setSortedList}
            listToChange={psychologistsList}
          />
          <PsychologistsList psychologistsList={sortedList} />
        </div>
      )}
    </>
  );
}
