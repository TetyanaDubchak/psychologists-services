'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import s from '../styles/components/HeaderMobile.module.scss';
import MobileMenu from './MobileMenu';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={s.wrapper}>
      <Logo />
      <button
        onClick={handleMobileMenu}
        className={s['burger-btn']}
        type="button"
      >
        <span className={s['burger']}></span>
      </button>
      <MobileMenu in={isMenuOpen} onClose={handleMobileMenu} />
    </div>
  );
}
