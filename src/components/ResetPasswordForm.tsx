'use client';
import React from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { schemaResetPassword } from '@/lib/schema';
import s from '../styles/components/ResetPasswordForm.module.scss';
import ModalLayout from './ModalLayout';
import { useModalForm} from '@/lib/store';

export interface ResetPasswordFormProps {
  children: React.ReactNode;
}
 
type FormData = yup.InferType<typeof schemaResetPassword>;
 
export default function ResetPasswordForm() {
  const { isResetPasswordFormOpen, setIsResetPasswordFormClose } = useModalForm();

  const closeModal = () => {
    setIsResetPasswordFormClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schemaMeeting),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();
      console.log('Login successful', result);

      closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return isMeetingFormOpen ? (
    <ModalLayout
      title="Make an appointment with a psychologists"
      in={isMeetingFormOpen}
      onClose={closeModal}
    >
      <p className={s['info-text']}>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <div className={s['psychologists-wrapper']}>
        <Image
          src={psychologistsClicked?.avatar_url}
          alt="psychologist photo"
          width={16}
          height={16}
          className={s['psychologists-picture']}
        />
        <div>
          <p className={s['psychologists-top-title']}>Your psychologists</p>
          <p className={s['psychologists-name']}>
            {psychologistsClicked?.name}
          </p>
        </div>
      </div>
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
        <div className={s['extra-wrapper']}>
          <div className={s['field-wrapper']}>
            <input
              className={`${s.field} ${s['phone-field']}`}
              type="text"
              {...register('phone')}
            />
            <p className={s['error-text']}>{errors.phone?.message}</p>
            <span className={s['phone-start']}>+380</span>
          </div>
          <div className={s['field-wrapper']}>
            <TimeInput register={register('times')} />
            <p className={s['error-text']}>{errors.times?.message}</p>
          </div>
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
          <textarea
            className={`${s.field} ${s['comment-field']}`}
            placeholder="Comment"
            {...register('comment')}
          />
          <p className={s['error-text']}>{errors.email?.message}</p>
        </div>
        <button
          className={s['submit-btn']}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </ModalLayout>
  ) : null;
}