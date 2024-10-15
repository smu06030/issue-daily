'use client';

import InputField from '@/components/common/InputFeild/InputField';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = async (userInfo: FieldValues) => {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...userInfo
      })
    });
    const { message, error } = await res.json();

    if (error) {
      alert('이미 존재하는 아이디입니다.');
      return;
    }
    alert(message);
    router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputField
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일를 입력해 주세요."
          registerOptions={register('email', {
            required: '이메일을 다시 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/i,
              message: '이메일 형식에 맞지 않습니다.'
            }
          })}
          errors={errors}
        />
        <InputField
          name="password"
          type="password"
          label="비밀번호"
          placeholder="숫자 + 영문자 + 특수문자 조합, 8자리 이상"
          registerOptions={register('password', {
            required: '비밀번호를 다시 입력해주세요.',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: '숫자+영문자+특수문자 조합으로 8자 ~ 16자'
            }
          })}
          errors={errors}
        />
        <InputField
          name="passwordCheck"
          type="password"
          placeholder="숫자 + 영문자 + 특수문자 조합, 8자리 이상"
          registerOptions={register('passwordCheck', {
            required: '비밀번호를 다시 입력해주세요.',
            validate: (value) => (watch().password !== value ? '비밀번호가 일치하지 않습니다.' : true)
          })}
          errors={errors}
        />
        <InputField
          name="nickname"
          type="text"
          label="닉네임"
          placeholder="닉네임"
          registerOptions={register('nickname', {
            required: '닉네임을 입력해주세요.',
            pattern: {
              value: /^[가-힣a-zA-Z0-9]{2,8}$/,
              message: '공백을 제외한 영어, 숫자, 한글 2자 ~ 8자'
            }
          })}
          errors={errors}
        />
      </div>
      <button
        type="submit"
        className="my-9 h-[50px] w-[348px] rounded-md bg-black font-bold text-white shadow-buttonShadow hover:bg-zinc-800"
      >
        회원가입
      </button>
    </form>
  );
};

export default SignUpPage;
