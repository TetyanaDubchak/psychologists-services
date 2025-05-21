'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { useUserStore } from '@/lib/store';
import AuthHeaderButton from './AuthHeaderButton';
import s from '../styles/components/HeaderDesktop.module.scss';
import LogoutBlock from './LogoutBlock';

export interface HeaderDesktopProps {
  children: React.ReactNode;
}

export default function HeaderDesktop() {
  const pathname = usePathname();
  const { user } = useUserStore();

  return (
    <div className={s.wrapper}>
      <nav className={s['nav-wrapper']}>
        <Logo />
        <ul className={s['pages-wrapper']}>
          <li
            className={`${s['pages-item']} ${pathname === '/' && s['pages-item-active']}`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${s['pages-item']} ${pathname === '/psychologists' && s['pages-item-active']}`}
          >
            <Link href="/psychologists">Psychologists</Link>
          </li>
          {user && (
            <li
              className={`${s['pages-item']} ${pathname === '/favorites' && s['pages-item-active']}`}
            >
              <Link href="/favorites">Favorites</Link>
            </li>
          )}
        </ul>
      </nav>
      {user ? <LogoutBlock /> : <AuthHeaderButton />}
    </div>
  );
}
