import GoogleButton from '@/components/common/Button/GoogleButton';
import KakaoButton from '@/components/common/Button/KakaoButton';
import Link from 'next/link';
import AuthLayout from '../auth-layout';
import LoginForm from '@/components/common/Form/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인 페이지',
  description: '로그인 페이지 입니다.'
};

const LoginPage = () => {
  return (
    <AuthLayout title="로그인">
      <LoginForm />
      <Link href={'/reset-password'} className="mb-12 mt-3 text-sm text-[#999] hover:underline">
        비밀번호 찾기
      </Link>
      <GoogleButton />
      <KakaoButton />
      <Link href={'/signup'} className="mb-12 mt-12 text-sm font-bold hover:underline">
        회원가입 &gt;
      </Link>
    </AuthLayout>
  );
};

export default LoginPage;
