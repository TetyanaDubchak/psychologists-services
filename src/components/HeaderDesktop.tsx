import React from 'react';
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
          <li className={s['pages-item']}>Home</li>
          <li className={s['pages-item']}>Psychologists</li>
        </ul>
      </nav>
      <AuthHeaderButton />
    </div>
  );
}
