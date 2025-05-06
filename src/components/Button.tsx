import React from 'react';
import s from '../styles/components/Button.module.scss';

export interface ButtonProps {
  type: string;
  content: string;
}

export default function Button({ type, content }: ButtonProps) {
  return (
    // <button className={s['button']} type={type}>
    //   {content}
    // </button>
  );
}
