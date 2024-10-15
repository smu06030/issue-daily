'use client';

import { FieldValues, useForm } from 'react-hook-form';
import InputField from '../InputFeild/InputField';
import browserClient from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

const UpdatePasswordForm = () => {
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
    try {
      // 비동기 작업을 병렬로 처리
      await Promise.all([
        browserClient.auth.updateUser({ password: userInfo.password }),
        fetch('/api/logout', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
      ]);

      alert('비밀번호를 변경했습니다. 다시 로그인 하세요.');
      router.push('/login');
    } catch (error) {
      console.error('비밀번호 변경 중 오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
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
      </div>
      <button
        type="submit"
        className="mt-9 h-[50px] w-[348px] rounded-md bg-black font-bold text-white shadow-buttonShadow hover:bg-zinc-800"
      >
        비밀번호 변경
      </button>
    </form>
  );
};

export default UpdatePasswordForm;
