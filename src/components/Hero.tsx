import React from 'react';
import s from '../styles/components/Hero.module.scss';
import HeroPhoto from './HeroPhoto';
import HeroTitle from './HeroTitle';

export interface HeroProps {
  children: React.ReactNode;
}

export default function Hero() {
  return (
    <div className={s['wrapper']}>
      <HeroPhoto />
      <HeroTitle />
    </div>
  );
}
