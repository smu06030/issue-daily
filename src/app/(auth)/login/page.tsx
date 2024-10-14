'use client';

import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import InputField from '../../../components/common/InputFeild/InputField';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
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
        className="w-[348px] h-[50px] mt-9 shadow-buttonShadow bg-black rounded-md text-white font-bold hover:bg-zinc-800"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginPage;
