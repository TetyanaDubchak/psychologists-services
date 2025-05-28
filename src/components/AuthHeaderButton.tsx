'use client';
import React from 'react';
import { useModalForm, useMobileMenu } from '@/lib/store';
import s from '@/styles/components/AuthHeaderButton.module.scss';

export interface AuthHeaderButtonProps {
  children: React.ReactNode;
}

export default function AuthHeaderButton() {
  const { setIsLoginFormOpen, setIsRegistrationFormOpen } = useModalForm();
  const { isMobileMenuOpen, setMobileMenuClose } = useMobileMenu();

  const handleOpenLoginForm = () => {
    if (isMobileMenuOpen) {
      setMobileMenuClose();
    }
    setIsLoginFormOpen();
  };

  const handleOpenRegistrationForm = () => {
    if (isMobileMenuOpen) {
      setMobileMenuClose();
    }
    setIsRegistrationFormOpen();
  };

  return (
    <ul className={s['wrapper']}>
      <li>
        <button
          onClick={handleOpenLoginForm}
          className={s['log-btn']}
          type="button"
        >
          Log In
        </button>
      </li>
      <li>
        <button
          onClick={handleOpenRegistrationForm}
          className={s['registr-btn']}
          type="button"
        >
          Registration
        </button>
      </li>
    </ul>
  );
}
