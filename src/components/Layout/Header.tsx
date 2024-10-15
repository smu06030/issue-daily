import { getIsLogin } from '@/utils/supabase/server';
import Link from 'next/link';

const Header = async () => {
  const isLogin: boolean = await getIsLogin();

  return (
    <div className="flex justify-between items-center h-12 shadow-md">
      <div className="ml-5 font-pretendard font-bold text-xl">
        <p>Issue Daily</p>
      </div>
      <div className="mr-5">
        {isLogin ? (
          <div>
            <Link href={'/mypage'}>
              <p>마이페이지</p>
            </Link>
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
