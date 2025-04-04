'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { schemaMeeting } from '@/lib/schema';
import s from '../styles/components/MeetingForm.module.scss';
import ModalLayout from './ModalLayout';
import { useModalForm } from '@/lib/store';
import Icon from './Icon';

export interface MeetingFormProps {
  children: React.ReactNode;
}

type FormData = yup.InferType<typeof schemaMeeting>;

export default function MeetingForm() {
  const { isMeetingFormOpen, setIsMeetingFormClose } = useModalForm();

  const closeModal = () => {
    setIsMeetingFormClose();
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
            <input className={s['field']} type="text" {...register('phone')} />
            <p className={s['error-text']}>{errors.phone?.message}</p>
            <span>+380</span>
          </div>
          <div className={s['field-wrapper']}>
            <input
              className={s['field']}
              type="text"
              placeholder="00:00"
              {...register('times')}
            />
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
          <input
            className={s['field']}
            type="text"
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
