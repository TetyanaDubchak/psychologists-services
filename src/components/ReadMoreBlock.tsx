import React from 'react';
import s from '@/styles/components/ReadMoreBlock.module.scss';
import ReviewsList from './ReviewsList';

export interface Reviews {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface ReadMoreBlockProps {
  reviews?: Reviews[];
}

export default function ReadMoreBlock({ reviews }: ReadMoreBlockProps) {
  return (
    <div className={s['wrapper']}>
      {reviews && reviews?.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p className={s['no-results']}>No reviews.</p>
      )}
      <button className={s['meeting-btn']} type="button">
        Make an appointment
      </button>
    </div>
  );
}
