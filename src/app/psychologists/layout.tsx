import MeetingForm from '@/components/MeetingForm';
import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <main>{children}</main>
      <MeetingForm />
    </div>
  );
}
