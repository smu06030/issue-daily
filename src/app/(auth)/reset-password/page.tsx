import React from 'react';
import AuthLayout from '../auth-layout';
import ResetPasswordForm from '@/components/common/Form/ResetPasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이메일 전송 페이지',
  description: '이메일 전송 페이지 입니다.'
};

const ResetPasswordPage = () => {
  return (
    <AuthLayout title="비밀번호 재설정">
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
