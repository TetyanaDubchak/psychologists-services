import React from 'react';
import s from '../styles/components/HeroTitle.module.scss';
import Icon from './Icon';

export interface HeroTitleProps {
  children: React.ReactNode;
}

export default function HeroTitle() {
  return (
    <div className={s['wrapper']}>
      <h1 className={s['title']}>
        The road to the <span>depths</span> of the human soul
      </h1>
      <p className={s['subtitle']}>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
      <button className={s['start-btn']} type="button">
        Get started <Icon type="arrow-light" />
      </button>
    </div>
  );
}
