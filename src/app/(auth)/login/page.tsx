'use client';

import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import InputField from '../../../components/common/InputFeild/InputField';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/providers/userStoreProvider';

const LoginPage = () => {
  const { userLogin } = useUserStore((state) => state);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = async (userInfo: FieldValues) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...userInfo
      })
    });
    const { user } = await res.json();

    if (!user) {
      alert('아이디와 비밀번호를 다시 입력해주세요.');
      return;
    }
    userLogin();
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

export default LoginPage;
