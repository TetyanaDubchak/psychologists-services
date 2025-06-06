import React from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/lib/store';
import s from '@/styles/components/LogoutBlock.module.scss';
import Icon from './Icon';
import { logout } from '@/lib/apiAuth';

export interface LogoutBlockProps {
  children: React.ReactNode;
}

export default function LogoutBlock() {
  const router = useRouter();
  const { user } = useUserStore();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
      console.log('Logout success');
    } catch (error) {
      console.error('Logout', error);
    }
  };

  return (
    <div className={s['wrapper']}>
      <div className={s['user-wrapper']}>
        <div className={s['icon-box']}>
          <Icon type="user" clas={s['icon']} />
        </div>
        <p className={s['user-name']}>{user?.name}</p>
      </div>
      <button onClick={handleLogout} className={s['logout-btn']} type="button">
        Log out
      </button>
    </div>
  );
}
