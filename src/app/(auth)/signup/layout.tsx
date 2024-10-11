import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입 페이지',
  description: '회원가입 페이지 입니다.'
};

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="font-pretendard flex justify-center items-center flex-col">
      <div className="text-2xl font-bold mb-5">회원가입</div>
      {children}
    </section>
  );
};

export default SignUpLayout;
