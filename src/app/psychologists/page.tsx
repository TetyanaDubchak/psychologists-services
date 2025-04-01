'use client';
import React, { useEffect, useState } from 'react';
import { getPsychologistsList } from '@/lib/api';
import { usePsychologistsList } from '@/lib/store';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const { psychologistsList, setPsychologistsList } = usePsychologistsList();

  useEffect(() => {
    const getList = async () => {
      try {
        setIsLoading(true);
        const data = await getPsychologistsList();
        setPsychologistsList(data);
      } catch (error) {
        console.log(error);
        throw new Error();
      } finally {
        setIsLoading(false);
      }
    };
    getList();
  }, [setPsychologistsList]);
  return <div>List</div>;
}
