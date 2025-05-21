'use client';
import FavoritesPage from '@/components/FavoritesPage';
import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUserStore } from '@/lib/store';

export default function Page() {
  const { user } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();
  const isFavoritesPage = pathname === '/favorites';

  useEffect(() => {
    if (isFavoritesPage && !user) {
      router.push('/');
    }
  }, [user, isFavoritesPage, router]);
  return (
    <div>
      <main>
        <FavoritesPage />
      </main>
    </div>
  );
}
