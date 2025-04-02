import React from 'react';
import { Reviews } from '@/components/ReadMoreBlock';
import s from '../styles/components/ReviewsList.module.scss';
import Icon from './Icon';

export interface ReviewsListProps {
  reviews?: Reviews[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <ul className={s['list']}>
      {reviews?.map((item, inx) => {
        return (
          <li className={s['item']} key={inx}>
            <div className={s['top-wrapper']}>
              <div className={s['avatar-wrapper']}>
                {item.reviewer.slice(0, 1)}
              </div>
              <div className={s['info-wrapper']}>
                <p className={s['name']}>{item.reviewer}</p>
                <p className={s['rating']}>
                  <Icon type="star" />
                  {item.rating}
                </p>
              </div>
            </div>
            <p className={s['comment']}>{item.comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
