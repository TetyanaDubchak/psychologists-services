'use client';
import React from 'react';
import { useModalForm } from '@/lib/store';
import s from '@/styles/components/AuthHeaderButton.module.scss';

export interface AuthHeaderButtonProps {
  children: React.ReactNode;
}

export default function AuthHeaderButton() {
  const { setIsLoginFormOpen, setIsRegistrationFormOpen } = useModalForm();

  return (
    <ul className={s['wrapper']}>
      <li>
        <button
          onClick={() => setIsLoginFormOpen()}
          className={s['log-btn']}
          type="button"
        >
          Log In
        </button>
      </li>
      <li>
        <button
          onClick={() => setIsRegistrationFormOpen()}
          className={s['registr-btn']}
          type="button"
        >
          Registration
        </button>
      </li>
    </ul>
  );
}
