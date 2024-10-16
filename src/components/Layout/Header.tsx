'use client';
import Link from 'next/link';
import { useUserStore } from '@/providers/userStoreProvider';
import LogoutButton from '../common/Button/LogoutButton';

const Header = () => {
  const { isUser } = useUserStore((state) => state);

  return (
    <div className="fixed z-20 flex h-12 w-[100%] items-center justify-between bg-white px-5 font-pretendard shadow-md">
      <div className="text-xl font-bold">
        <Link href={'/'}>
          <p>Issue Daily</p>
        </Link>
      </div>

      <div>
        {isUser ? (
          <div className="flex gap-6">
            <Link href="/mypage">
              <p>마이페이지</p>
            </Link>
            <LogoutButton />
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
