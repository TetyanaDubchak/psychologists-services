'use client';
import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import s from '@/styles/components/TimeInput.module.scss';
import Icon from './Icon';

export interface TimeInputProps {
  register: UseFormRegisterReturn;
}

const timeSlots = [
  '09 : 00',
  '09 : 30',
  '10 : 00',
  '10 : 30',
  '11 : 00',
  '11 : 30',
  '12 : 00',
  '12 : 30',
  '13 : 00',
  '13 : 30',
  '14 : 00',
  '14 : 30',
  '15 : 00',
  '15 : 30',
  '16 : 00',
  '16 : 30',
  '17 : 00',
  '17 : 30',
];

export default function TimeInput({ register }: TimeInputProps) {
  const [time, setTime] = useState('00:00');
  const [isOpen, setIsOpen] = useState(false);

  const toggleClock = () => setIsOpen((prev) => !prev);

  const handleSelect = (selectedTime: string) => {
    setTime(selectedTime);
    setIsOpen(false);
  };

  return (
    <div className={s['time-picker-wrapper']}>
      <input
        {...register}
        type="text"
        value={time}
        readOnly
        className={s['time-field']}
        onClick={toggleClock}
      />
      <button type="button" onClick={toggleClock} className={s['clock-button']}>
        <Icon type="clock" />
      </button>

      {isOpen && (
        <div className={s['time-picker-popup']}>
          <p className={s['popup-title']}>Meeting time</p>
          <ul className={s['time-options']}>
            {timeSlots.map((slot) => (
              <li
                key={slot}
                className={`${s['time-option']} ${slot === time ? s['active'] : ''}`}
                onClick={() => handleSelect(slot)}
              >
                {slot}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
