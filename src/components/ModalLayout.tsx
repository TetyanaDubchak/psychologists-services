'use client';
import { Transition } from 'react-transition-group';
import React, { useEffect, useRef } from 'react';
import s from '../styles/components/ModalLayout.module.scss';
import Icon from './Icon';
import Image from 'next/image';
import { duration, defaultStyle, transitionStyles } from '@/lib/transition';
import {
  handleBackdropClick,
  handleEscapeClick,
  handleBlockBody,
  handleUnBlockBody,
} from '@/lib/extraFunc';

export interface ModalLayoutProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  in: boolean;
}

export default function ModalLayout({
  title,
  onClose,
  children,
  in: inProp,
}: ModalLayoutProps) {
  const nodeRef = useRef(null);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => (
        <div
          className={s.backdrop}
          ref={nodeRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <div className={s['modal']}>
            <h2 className={s['title']}>{title}</h2>
            {children}
            <button className={s['close-btn']} type="button" onClick={onClose}>
              <Image
                src="/images/close.svg"
                alt="close button"
                width="16"
                height="16"
              />
            </button>
          </div>
        </div>
      )}
    </Transition>
  );
}
