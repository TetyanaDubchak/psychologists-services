import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import s from '../styles/components/Header.module.scss';
import HeaderMobile from './HeaderMobile';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header() {
  return (
    <header className={s['wrapper']}>
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
}
