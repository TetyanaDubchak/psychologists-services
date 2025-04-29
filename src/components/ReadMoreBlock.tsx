import React from 'react';
import s from '@/styles/components/ReadMoreBlock.module.scss';
import ReviewsList from './ReviewsList';
import {
  usePsychologistsList,
  useModalForm,
  usePsychologistsForMeetings,
} from '@/lib/store';
import { Reviews } from '@/lib/stateTypes';

export interface ReadMoreBlockProps {
  reviews?: Reviews[];
  idValue: string;
}

export default function ReadMoreBlock({
  reviews,
  idValue,
}: ReadMoreBlockProps) {
  const { setIsMeetingFormOpen } = useModalForm();
  const { setPsychologistsClicked } = usePsychologistsForMeetings();
  const { psychologistsList } = usePsychologistsList();

  const openMeetingForm = () => {
    const selectedItem = psychologistsList.find((item) => item.id === idValue);
    if (selectedItem) {
      console.log('Selected', selectedItem);
      setPsychologistsClicked(selectedItem);
      setIsMeetingFormOpen();
    }
  };
  return (
    <div className={s['wrapper']}>
      {reviews && reviews?.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p className={s['no-results']}>No reviews.</p>
      )}
      <button
        onClick={openMeetingForm}
        className={s['meeting-btn']}
        type="button"
      >
        Make an appointment
      </button>
    </div>
  );
}
