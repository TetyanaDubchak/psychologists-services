import React from 'react';
import s from '../styles/components/HeaderMobile.module.scss';
import Logo from './Logo';
import Icon from './Icon';
import { duration, defaultStyle, transitionStyles } from '@/lib/transition';

export default function MobileMenu({ in: inProp, onClose }) {
  return (
    <div className={s.wrapper}>
      <div>
        <Logo />
        <button type="button">
          <Icon type="close" />
        </button>
      </div>
    </div>
  );
}
