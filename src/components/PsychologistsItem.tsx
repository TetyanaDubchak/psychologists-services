import React from 'react';

import s from '@/styles/components/PsychologistsList.module.scss';

export interface PsychologistsItemProps {
  psychologist: {
    id: string;
    name: 'Dr. Sarah Davis';
    avatar_url: 'https://ftp.goit.study/img/avatars/23.jpg';
    experience: '12 years';
    reviews: [
      {
        reviewer: 'Michael Brown';
        rating: 4.5;
        comment: 'Dr. Davis has been a great help in managing my depression. Her insights have been valuable.';
      },
      {
        reviewer: 'Linda Johnson';
        rating: 5;
        comment: "I'm very satisfied with Dr. Davis's therapy. She's understanding and empathetic.";
      },
    ];
    price_per_hour: 120;
    rating: 4.75;
    license: 'Licensed Psychologist (License #67890)';
    specialization: 'Depression and Mood Disorders';
    initial_consultation: 'Free 45-minute initial consultation';
    about: 'Dr. Sarah Davis is a highly experienced and licensed psychologist specializing in Depression and Mood Disorders. With 12 years of practice, she has helped numerous individuals overcome their depression and regain control of their lives. Dr. Davis is known for her empathetic and understanding approach to therapy, making her clients feel comfortable and supported throughout their journey to better mental health.';
  };
}

export default function PsychologistsItem({
  psychologist,
}: PsychologistsItemProps) {
  return <li></li>;
}
