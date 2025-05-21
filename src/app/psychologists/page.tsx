import React from 'react';
import { notFound } from 'next/navigation';
import { getPsychologistsList } from '@/lib/apiDatabase';
import PsychologistsPage from '@/components/PsychologistsPage';

export default async function Page() {
  const data = await getPsychologistsList();
  if (!data || Object.keys(data).length === 0) {
    notFound();
  }

  return (
    <div>
      <PsychologistsPage list={data} />
    </div>
  );
}
