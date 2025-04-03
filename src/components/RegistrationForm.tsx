import React from 'react';
import s from '../styles/components/LoginForm.module.scss';
import HeroPhoto from './HeroPhoto';
import HeroTitle from './HeroTitle';

export interface LoginFormProps {
  children: React.ReactNode;
}

export default function RegistrationForm() {
  return (
    <div className={s['wrapper']}>
      <HeroPhoto />
      <HeroTitle />
    </div>
  );
}
