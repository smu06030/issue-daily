import Link from 'next/link';
import React from 'react';
import GoogleButton from './../../../components/common/Button/GoogleButton';
import KakaoButton from '../../../components/common/Button/KakaoButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인 페이지',
  description: '로그인 페이지 입니다.'
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center font-pretendard">
      <div className="mb-12 text-2xl font-bold">로그인</div>
      {children}
      <Link href={'/reset-password'} className="mb-12 mt-3 text-sm text-[#999] hover:underline">
        비밀번호 찾기
      </Link>
      <GoogleButton />
      <KakaoButton />
      <Link href={'/signup'} className="mt-12 text-sm font-bold hover:underline">
        회원가입 &gt;
      </Link>
    </section>
  );
};

export default LoginLayout;
