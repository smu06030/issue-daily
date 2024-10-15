'use client';

import { ModalProps } from '@/types/mypageTypes';
import browserClient from '@/utils/supabase/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';

// 모달 컴포넌트
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, userProfile, userId }) => {
  const [formData, setFormData] = useState({
    user_name: userProfile?.user_name,
    email: userProfile?.email,
    avatar_url: userProfile?.avatar_url || ''
  });

  const updateProfileByUserId = async () => {
    const { data } = await browserClient.from('profiles').update(formData).eq('id', userProfile?.id);
    return data;
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateProfileByUserId,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user', userId]
      });
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 파일 업로드 처리
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar_url: reader.result as string })); // 파일 URL을 avatar_url에 설정
      };
      reader.readAsDataURL(file); // 파일을 Data URL로 변환
    }
  };

  // 수정완료 버튼
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={onClose}>
      <div
        className="modal-content relative flex w-[400px] flex-col items-center justify-center gap-2 rounded-tl-md rounded-tr-md border bg-white p-[20px] shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className="absolute right-[20px] top-[10px]">
          x
        </button>
        <h2>회원정보 수정</h2>
        <Image
          src={formData.avatar_url || '/images/default_profile.jpeg'}
          alt="Avatar"
          className="rounded-full"
          width={100}
          height={100}
        />

        <h2>이메일: {formData.email}</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <label htmlFor="image">프로필 이미지 변경:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-[60%] rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              onChange={handleFileChange} // 파일 변경 핸들러 추가
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="user_name">닉네임:</label>
            <input
              type="text"
              id="user_name"
              name="user_name" // name 속성 수정
              value={formData.user_name}
              onChange={handleChange}
              className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-[60%] rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            className="absolute bottom-[-33px] left-[-0.5px] w-[400px] rounded-bl-md rounded-br-md border border-none bg-slate-400 py-1"
          >
            수정 완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
