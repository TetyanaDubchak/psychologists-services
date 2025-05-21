'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import HeaderDesktop from './HeaderDesktop';
import s from '../styles/components/Header.module.scss';
import HeaderMobile from './HeaderMobile';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className={`${s['wrapper']} ${pathname === '/' && s['wrapper-home']}`}
    >
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
}
