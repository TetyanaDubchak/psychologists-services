'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { schemaRegistration } from '@/lib/schema';
import s from '../styles/components/RegistrationForm.module.scss';
import ModalLayout from './ModalLayout';
import { useModalForm } from '@/lib/store';
import { registration } from '@/lib/apiAuth';
import Icon from './Icon';

export interface RegistrationFormProps {
  children: React.ReactNode;
}

type FormData = yup.InferType<typeof schemaRegistration>;

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    isRegistrationFormOpen,
    setIsRegistrationFormClose,
    setIsLoginFormOpen,
  } = useModalForm();

  const closeModal = () => {
    setIsRegistrationFormClose();
  };

  const handleOpenLogin = () => {
    setIsRegistrationFormClose();
    setIsLoginFormOpen();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schemaRegistration),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await registration(data.email, data.password, data.name);
      console.log('Data', data);
      console.log('Registration successful');
      closeModal();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return isRegistrationFormOpen ? (
    <ModalLayout
      title="Registration"
      in={isRegistrationFormOpen}
      onClose={closeModal}
    >
      <p className={s['info-text']}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
        <div className={s['field-wrapper']}>
          <input
            className={s['field']}
            type="text"
            placeholder="Name"
            {...register('name')}
          />
          <p className={s['error-text']}>{errors.name?.message}</p>
        </div>
        <div className={s['field-wrapper']}>
          <input
            className={s['field']}
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          <p className={s['error-text']}>{errors.email?.message}</p>
        </div>
        <div className={s['field-wrapper']}>
          <input
            className={s['field']}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
          />
          <p className={s['error-text']}>{errors.password?.message}</p>
          <button
            onClick={togglePasswordVisibility}
            className={s['eye-btn']}
            type="button"
          >
            {showPassword ? <Icon type="eye-off" /> : <Icon type="eye" />}
          </button>
        </div>
        <div className={s['login-wrapper']}>
          <p className={s['login-text']}>Don`t login yet?</p>
          <button onClick={handleOpenLogin} className={s['login-button']}>
            Log in
          </button>
        </div>
        <button
          className={s['submit-btn']}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </ModalLayout>
  ) : null;
}
