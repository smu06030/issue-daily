'use client';

import { browserQueryClient } from '@/app/providers';
import browserClient from '@/utils/supabase/client';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
// UserProfile 타입 정의
type UserProfile = {
  id: string;
  user_name: string;
  email: string;
  avatar_url?: string | null; // avatar_url이 없거나 null일 수 있음을 명시
};

// Modal 컴포넌트의 프롭스 타입 정의
interface ModalProps {
  isOpen: boolean; // 모달 열림 여부
  onClose: () => void; // 모달 닫기 함수
  userProfile: UserProfile | null; // 사용자 프로필 (null일 수 있음)
  userId: string;
}

// 모달 컴포넌트
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, userProfile, userId }) => {
  const [formData, setFormData] = useState({
    user_name: userProfile?.user_name,
    email: userProfile?.email,
    avatar_url: userProfile?.avatar_url || ''
  });
  const queryClient = QueryClient;
  console.log(userId);
  const { data } = useMutation({
    mutationFn: () => updateProfileByUserId(),
    onSuccess: () =>
      browserQueryClient?.invalidateQueries({
        queryKey: ['user', userId]
      })
  });

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfileByUserId();
  };
  const updateProfileByUserId = async () => {
    const { data } = await browserClient.from('profiles').update(formData).eq('id', userProfile?.id);
    console.log(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="modal-content bg-white p-[20px] border rounded-tl-md rounded-tr-md shadow-md w-[400px] relative flex flex-col justify-center gap-2 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className="absolute right-[20px] top-[10px]">
          x
        </button>
        <h2>회원정보 수정</h2>
        <Image
          src={userProfile?.avatar_url || '/images/default_profile.jpeg'}
          alt="Avatar"
          className="rounded-full"
          width={100}
          height={100}
        />

        <h2>이메일:{formData.email} </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user_name">프로필 이미지 변경:</label>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="user_name">닉네임:</label>
            <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} />
          </div>
          <button
            type="submit"
            className="absolute bottom-[-33px] w-[400px] py-1 left-[-0.5px] border rounded-bl-md rounded-br-md border-none bg-slate-400"
          >
            수정 완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
