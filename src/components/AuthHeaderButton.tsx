import React from 'react';

import s from '@/styles/components/AuthHeaderButton.module.scss';

export interface AuthHeaderButtonProps {
  children: React.ReactNode;
}

export default function AuthHeaderButton() {
  return (
    <ul className={s['wrapper']}>
      <li>
        <button className={s['log-btn']} type="button">
          Log In
        </button>
      </li>
      <li>
        <button className={s['registr-btn']} type="button">
          Registration
        </button>
      </li>
    </ul>
  );
}
