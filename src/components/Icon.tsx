import React from 'react';

export interface IconProps {
  type: string;
  clas?: string;
}

export default function Icon({ type, clas = '' }: IconProps) {
  return (
    <svg className={clas}>
      <use href={`/images/svg/sprite.svg#icon-${type}`}></use>
    </svg>
  );
}
