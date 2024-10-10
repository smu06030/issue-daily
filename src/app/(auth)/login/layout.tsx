import Link from 'next/link';
import React from 'react';
import GoogleButton from './../../../components/common/Button/GoogleButton';
import KakaoButton from '../../../components/common/Button/KakaoButton';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="font-pretendard flex justify-center items-center flex-col">
      <div className="text-2xl font-bold mb-12">로그인</div>
      {children}
      <Link href={'/reset-password'} className="text-sm mt-3 mb-12 text-[#999] hover:underline">
        비밀번호 찾기
      </Link>
      <GoogleButton />
      <KakaoButton />
      <Link href={'/signup'} className='text-sm mt-12 font-bold hover:underline'>회원가입 &gt;</Link>
    </section>
  );
};

export default LoginLayout;
