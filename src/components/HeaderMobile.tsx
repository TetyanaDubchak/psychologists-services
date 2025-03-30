import React from 'react';
import Logo from './Logo';
import s from '../styles/components/HeaderMobile.module.scss';

export default function HeaderMobile() {
  return (
    <div className={s.wrapper}>
      <Logo />
      <button className={s['burger-btn']} type="button">
        <span className={s['burger']}></span>
      </button>
    </div>
  );
}
