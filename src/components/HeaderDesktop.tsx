import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import AuthHeaderButton from './AuthHeaderButton';
import s from '../styles/components/HeaderDesktop.module.scss';

export interface HeaderDesktopProps {
  children: React.ReactNode;
}

export default function HeaderDesktop() {
  return (
    <div className={s.wrapper}>
      <nav className={s['nav-wrapper']}>
        <Logo />
        <ul className={s['pages-wrapper']}>
          <li className={s['pages-item']}>
            <Link href="/">Home</Link>
          </li>
          <li className={s['pages-item']}>
            <Link href="/psychologists">Psychologists</Link>
          </li>
        </ul>
      </nav>
      <AuthHeaderButton />
    </div>
  );
}
