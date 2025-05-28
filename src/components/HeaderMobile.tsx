'use client';
import React from 'react';
import Logo from './Logo';
import s from '../styles/components/HeaderMobile.module.scss';
import MobileMenu from './MobileMenu';
import { useMobileMenu } from '@/lib/store';

export default function HeaderMobile() {
  const { isMobileMenuOpen, setMobileMenuOpen, setMobileMenuClose } =
    useMobileMenu();

  return (
    <div className={s.wrapper}>
      <Logo />
      <button
        onClick={setMobileMenuOpen}
        className={s['burger-btn']}
        type="button"
      >
        <span className={s['burger']}></span>
      </button>
      <MobileMenu in={isMobileMenuOpen} onClose={setMobileMenuClose} />
    </div>
  );
}
