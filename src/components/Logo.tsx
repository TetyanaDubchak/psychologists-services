import React from 'react';
import Link from 'next/link';
import s from '@/styles/components/Logo.module.scss';

export interface LogoProps {
  handleClose?: () => void;
}

export default function Logo({ handleClose }: LogoProps) {
  return (
    <Link onClick={handleClose} href="/">
      <p className={s.main}>
        <span>psychologists.</span>
        services
      </p>
    </Link>
  );
}
