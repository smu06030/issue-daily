'use client';

import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import InputField from '../../../components/common/InputFeild/InputField';
import LoginButton from '../../../components/common/Button/LoginButton';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = (userInfo: FieldValues) => {
    console.log(userInfo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputField
          type="email"
          placeholder="이메일를 입력해 주세요."
          registerOptions={register('email', {
            required: '이메일을 다시 입력해주세요.'
          })}
          errors={errors}
        />
        <InputField
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          registerOptions={register('password', {
            required: '비밀번호를 다시 입력해주세요.'
          })}
          errors={errors}
        />
      </div>
      <LoginButton />
    </form>
  );
};

export default LoginPage;
