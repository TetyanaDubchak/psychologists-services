import React from 'react';
import { usePsychologistsList } from '@/lib/store';
import s from '@/styles/components/PsychologistsList.module.scss';
import PsychologistsItem from './PsychologistsItem';

export default function PsychologistsList() {
  const { psychologistsList } = usePsychologistsList();

  return (
    <div>
      <ul>
        {psychologistsList.map((item) => {
          return <PsychologistsItem key={item.id} psychologist={item} />;
        })}
      </ul>
    </div>
  );
}
