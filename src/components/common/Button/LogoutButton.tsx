'use client';
import { useUserStore } from '@/providers/userStoreProvider';
import React from 'react';

const LogoutButton = () => {
  const { userLogout } = useUserStore((state) => state);
  // 로그아웃 버튼 클릭 시
  const onClickLogoutBtn = async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'DELETE'
      });

      if (!res.ok) {
        throw new Error('로그아웃에 실패했습니다.');
      }

      userLogout();
      alert('로그아웃 되었습니다.');
    } catch (error) {
      console.error('Error:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };
  return <button onClick={onClickLogoutBtn}>로그아웃</button>;
};

export default LogoutButton;
