import React from 'react';
import Icon from './Icon';
import s from '@/styles/components/FavoriteButton.module.scss';
import {
  addFavoritePsychologist,
  removeFavoritePsychologist,
  updateFavoriteList,
} from '@/lib/apiDatabase';
import { useUserStore, useModalForm } from '@/lib/store';

export interface FavoriteButtonProps {
  psychologistId: string;
}

export default function FavoriteButton({
  psychologistId,
}: FavoriteButtonProps) {
  const { setIsLoginFormOpen } = useModalForm();
  const user = useUserStore((state) => state.user);

  const handleToggleFavorite = async () => {
    if (!user) {
      console.log('User not logged in');
      setIsLoginFormOpen();
      return;
    }

    const isFavorite = user.favorites && user.favorites[psychologistId];

    try {
      if (isFavorite) {
        await removeFavoritePsychologist(user.uid, psychologistId);
        console.log('Removed from favorites');
      } else {
        await addFavoritePsychologist(user.uid, psychologistId);
        console.log('Psychologist added to favorites');
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
    } finally {
      updateFavoriteList(user.uid);
    }
    console.log('Favorites', user.favorites);
  };

  return (
    <button onClick={handleToggleFavorite} className={s['like-btn']}>
      <Icon clas={s.heart} type="heart" />
    </button>
  );
}
