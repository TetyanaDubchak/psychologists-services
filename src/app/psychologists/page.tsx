'use client';
import React, { useEffect, useState } from 'react';
import { getPsychologistsList } from '@/lib/apiDatabase';
import { usePsychologistsList } from '@/lib/store';
import PsychologistsPage from '@/components/PsychologistsPage';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const { psychologistsList, setPsychologistsList } = usePsychologistsList();

  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      try {
        const data = await getPsychologistsList();
        // console.log('User data:', data);
        if (data) {
          setPsychologistsList(data);
        }
      } catch (error) {
        console.log(error);
        throw new Error();
      } finally {
        setIsLoading(false);
      }
    };
    getList();
  }, [setPsychologistsList]);
  return <>{isLoading ? <p>Loading...</p> : <PsychologistsPage />}</>;
}
