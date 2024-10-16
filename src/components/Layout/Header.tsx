import { getIsLogin } from '@/utils/supabase/server';
import Link from 'next/link';

const Header = async () => {
  const isLogin: boolean = await getIsLogin();

  return (
    <div className="fixed z-20 flex h-12 w-[100%] items-center justify-between bg-white px-5 shadow-md">
      <div className="font-pretendard text-xl font-bold">
        <Link href={'/'}>
          <p>Issue Daily</p>
        </Link>
      </div>
      <div>
        {isLogin ? (
          <div className="flex gap-6">
            <Link href={'/mypage'}>마이페이지</Link>
            <Link href={'/'}>로그아웃</Link>
          </div>
        ) : (
          <Link href={'/login'}>
            <p>로그인</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
