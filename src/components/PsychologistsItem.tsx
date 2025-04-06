import React, { useState } from 'react';
import Image from 'next/image';
import s from '@/styles/components/PsychologistsItem.module.scss';
import Icon from './Icon';
import { Reviews } from '@/components/ReadMoreBlock';
import ReadMoreBlock from './ReadMoreBlock';

export interface Psychologist {
  id: string;
  name: string;
  avatar_url: string;
  experience: string;
  reviews?: Reviews[];
  price_per_hour: number;
  rating: number;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
}

export interface PsychologistsItemProps {
  psychologist: Psychologist;
}

export default function PsychologistsItem({
  psychologist,
}: PsychologistsItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    id,
    name,
    avatar_url,
    experience,
    reviews,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
  } = psychologist;
  return (
    <li className={s['main-wrapper']}>
      <div className={s['avatar-wrapper']}>
        <div className={s['photo-wrapper']}>
          <Image
            src={avatar_url}
            width={90}
            height={90}
            alt="psychologist photo"
          />
        </div>
      </div>
      <div className={s['information-wrapper']}>
        <div className={s['top-wrapper']}>
          <h3 className={s['name-wrapper']}>
            Psychologist <span>{name}</span>
          </h3>
          <div className={s['information-top-wrapper']}>
            <div className={s['rating-wrapper']}>
              <Icon type="star" />
              Rating: {rating}
            </div>
            <div className={s['price-wrapper']}>
              Price / 1 hour: <span>{price_per_hour}$</span>
            </div>
            <button className={s['like-btn']}>
              <Icon clas={s.heart} type="heart" />
            </button>
          </div>
        </div>
        <ul className={s['characteristics-list']}>
          <li className={s['characteristics-item']}>
            Experience: <span>{experience}</span>
          </li>
          <li className={s['characteristics-item']}>
            License: <span>{license}</span>
          </li>
          <li className={s['characteristics-item']}>
            Specialization: <span>{specialization}</span>
          </li>
          <li className={s['characteristics-item']}>
            Initial_consultation: <span>{initial_consultation}</span>
          </li>
        </ul>
        <p className={s['about-text']}>{about}</p>
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            type="button"
            className={s['read-btn']}
          >
            Read more
          </button>
        )}
        {isExpanded && <ReadMoreBlock idValue={id} reviews={reviews ?? []} />}
      </div>
    </li>
  );
}
