import React from 'react';
import { Inter } from 'next/font/google';
import 'modern-normalize';
import '@/styles/main.scss';
import Header from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
