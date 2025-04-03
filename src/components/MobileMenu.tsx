'use client';
import { Transition } from 'react-transition-group';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import s from '../styles/components/MobileMenu.module.scss';
import Logo from './Logo';
import Link from 'next/link';
import { duration, defaultStyle, transitionStyles } from '@/lib/transition';
import {
  handleBackdropClick,
  handleEscapeClick,
  handleBlockBody,
  handleUnBlockBody,
} from '@/lib/extraFunc';
import AuthHeaderButton from './AuthHeaderButton';

interface MobileMenuProps {
  in: boolean;
  onClose: () => void;
}

export default function MobileMenu({ in: inProp, onClose }: MobileMenuProps) {
  const nodeRef = useRef(null);

  useEffect(() => {
    handleEscapeClick(onClose);
  }, [onClose]);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
      {(state) => (
        <div
          className={s.wrapper}
          ref={nodeRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <div className={s['top-wrapper']}>
            <Logo />
            <button onClick={onClose} className={s['close-btn']} type="button">
              <Image
                width={20}
                height={20}
                src="/images/close.svg"
                alt="close button"
              />
            </button>
          </div>
          <div className={s['middle-wrapper']}>
            <ul className={s['pages-wrapper']}>
              <li className={s['pages-item']}>
                <Link href="/">Home</Link>
              </li>
              <li className={s['pages-item']}>
                <Link href="/psychologists">Psychologists</Link>
              </li>
            </ul>
          </div>
          <div className={s['bottom-wrapper']}>
            <AuthHeaderButton />
          </div>
        </div>
      )}
    </Transition>
  );
}
