'use client';
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useUserStore } from '@/lib/store';
import AuthHeaderButton from './AuthHeaderButton';
import s from '../styles/components/HeaderDesktop.module.scss';
import LogoutBlock from './LogoutBlock';

export interface HeaderDesktopProps {
  children: React.ReactNode;
}

export default function HeaderDesktop() {
  const { user } = useUserStore();
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
          <li className={s['pages-item']}>
            <Link href="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
      {user ? <LogoutBlock /> : <AuthHeaderButton />}
    </div>
  );
}
