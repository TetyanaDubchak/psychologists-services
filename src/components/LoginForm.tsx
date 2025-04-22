'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { schemaLogin } from '@/lib/schema';
import s from '../styles/components/LoginForm.module.scss';
import ModalLayout from './ModalLayout';
import { useModalForm } from '@/lib/store';
import { login } from '@/lib/apiAuth';
import Icon from './Icon';

export interface LoginFormProps {
  children: React.ReactNode;
}

type FormData = yup.InferType<typeof schemaLogin>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoginFormOpen, setIsLoginFormClose } = useModalForm();

  const closeModal = () => {
    setIsLoginFormClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await login(data.email, data.password);
      console.log('Login successful');
      closeModal();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return isLoginFormOpen ? (
    <ModalLayout title="Log In" in={isLoginFormOpen} onClose={closeModal}>
      <p className={s['info-text']}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
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
        <button
          className={s['submit-btn']}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </ModalLayout>
  ) : null;
}
