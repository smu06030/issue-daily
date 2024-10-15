import UpdatePasswordForm from '@/components/common/Form/UpdatePasswordForm';
import AuthLayout from '../auth-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '비밀번호 변경 페이지',
  description: '비밀번호 변경 페이지 입니다.'
};

const UpdatePasswordPage = () => {
  return (
    <AuthLayout title="새로운 비밀번호">
      <UpdatePasswordForm />
    </AuthLayout>
  );
};

export default UpdatePasswordPage;
