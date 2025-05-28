'use client';
import React from 'react';
import s from '@/styles/components/Error.module.scss';

export default function GlobalError() {
  return (
    <div className={s['wrapper']}>
      <h2 className={s['title']}>Something went wrong!</h2>
    </div>
  );
}
