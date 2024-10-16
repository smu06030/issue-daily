'use client';

import { FieldValues, useForm } from 'react-hook-form';
import InputField from '../InputFeild/InputField';
import browserClient from '@/utils/supabase/client';

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = async (userInfo: FieldValues) => {
    await browserClient.auth.resetPasswordForEmail(userInfo.email, {
      redirectTo: window.origin + '/update-password'
    });
    alert('이메일을 전송했습니다.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputField
          name="email"
          type="email"
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
      </div>
      <button
        type="submit"
        className="mt-9 h-[50px] w-[348px] rounded-md bg-black font-bold text-white shadow-buttonShadow hover:bg-zinc-800"
      >
        이메일 전송
      </button>
    </form>
  );
};

export default ResetPasswordForm;
