import React from 'react';
import s from '@/styles/components/PsychologistsList.module.scss';
import PsychologistsItem from './PsychologistsItem';
import { Psychologist } from '@/lib/stateTypes';

export interface PsychologistsListProps {
  psychologistsList: Psychologist[];
}

export default function PsychologistsList({
  psychologistsList,
}: PsychologistsListProps) {
  return (
    <div>
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
