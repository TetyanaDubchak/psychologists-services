import React, { useState } from 'react';
import s from '@/styles/components/PsychologistsList.module.scss';
import PsychologistsItem from './PsychologistsItem';
import { Psychologist } from '@/lib/stateTypes';

export interface PsychologistsListProps {
  psychologistsList: Psychologist[];
}

export default function PsychologistsList({
  psychologistsList,
}: PsychologistsListProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePsychologists = psychologistsList.slice(0, visibleCount);

  const handleAddVisibleItem = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div>
      <ul className={s['list']}>
        {visiblePsychologists.map((item) => {
          return <PsychologistsItem key={item.id} psychologist={item} />;
        })}
      </ul>
      {visibleCount < psychologistsList.length && (
        <button className={s['load-btn']} onClick={handleAddVisibleItem}>
          Load more
        </button>
      )}
    </div>
  );
}
