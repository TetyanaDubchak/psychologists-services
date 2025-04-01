import React from 'react';
import Image from 'next/image';
import s from '../styles/components/HeroPhoto.module.scss';
import Icon from './Icon';

export interface HeroPhotoProps {
  children: React.ReactNode;
}

export default function HeroPhoto() {
  return (
    <div className={s['wrapper']}>
      <div className={s['photo-wrapper']}>
        <Image
          src="/images/hero-photo.png"
          alt="one of psychologists"
          width="200"
          height="200"
          className={s['picture']}
        />
      </div>
      <div className={s['static-wrapper']}>
        <div className={s['check-wrapper']}>
          <Icon type="check" />
        </div>
        <div className={s['text-wrapper']}>
          <p className={s['text']}>Experienced psychologists</p>
          <span className={s['quantity']}>15,000</span>
        </div>
      </div>
    </div>
  );
}
