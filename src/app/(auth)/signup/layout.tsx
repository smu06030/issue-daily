import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입 페이지',
  description: '회원가입 페이지 입니다.'
};

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center font-pretendard">
      <div className="mb-5 text-2xl font-bold">회원가입</div>
      {children}
    </section>
  );
};

export default SignUpLayout;
