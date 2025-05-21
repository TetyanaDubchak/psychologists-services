import React, { CSSProperties } from 'react';
import { RingLoader } from 'react-spinners';
import s from '@/styles/components/Loader.module.scss';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
  color: 'red',
};

export default function Loader() {
  return (
    <div className={s.wrapper}>
      <RingLoader
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className={s.title}>Please, wait a minute...</p>
    </div>
  );
}
