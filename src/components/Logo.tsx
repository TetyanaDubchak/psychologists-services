import React from 'react';
import Link from 'next/link';
import s from '@/styles/components/Logo.module.scss';

export default function Logo() {
  return (
    <Link href="/">
      <p className={s.main}>
        <span>psychologists.</span>
        services
      </p>
    </Link>
  );
}
