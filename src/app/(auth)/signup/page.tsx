import SignUpForm from '@/components/common/Form/SignUpForm';
import AuthLayout from '../auth-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입 페이지',
  description: '회원가입 페이지 입니다.'
};

const SignUpPage = () => {
  return (
    <AuthLayout title="회원가입">
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
