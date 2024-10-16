'use client';

import Link from 'next/link';
import { useUserStore } from '@/providers/userStoreProvider';

const Header = () => {
  const { isUser, userLogout } = useUserStore((state) => state);

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

  return (
    <div className="flex h-12 items-center justify-between font-pretendard shadow-md">
      <div className="ml-5 text-xl font-bold">
        <Link href={'/'}>
          <p>Issue Daily</p>
        </Link>
      </div>
      <div className="mr-5">
        {isUser ? (
          <div className="flex gap-5">
            <Link href="/mypage">
              <p>마이페이지</p>
            </Link>
            <button onClick={onClickLogoutBtn}>로그아웃</button>
          </div>
        ) : (
          <Link href="/login">
            <p>로그인</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
