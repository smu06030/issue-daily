'use client';

import { useRouter } from 'next/navigation';
import InputField from '../InputFeild/InputField';
import { FieldValues, useForm } from 'react-hook-form';
import { login } from '@/app/api/auth';

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = async (userInfo: FieldValues) => {
    const user = await login(userInfo);

    if (!user) {
      alert('아이디와 비밀번호를 다시 입력해주세요.');
      return;
    }

    router.push('/');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputField
          name="email"
          type="email"
          placeholder="이메일를 입력해 주세요."
          registerOptions={register('email', {
            required: '이메일을 다시 입력해주세요.'
          })}
          errors={errors}
        />
        <InputField
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          registerOptions={register('password', {
            required: '비밀번호를 다시 입력해주세요.'
          })}
          errors={errors}
        />
      </div>
      <button
        type="submit"
        className="mt-9 h-[50px] w-[348px] rounded-md bg-black font-bold text-white shadow-buttonShadow hover:bg-zinc-800"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
