'use client';
import { ModalProps } from '@/types/mypageTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';
import { MdClose } from 'react-icons/md';
import browserClient from '@/utils/supabase/client';
import Image from 'next/image';
import defaultProfile_img from '@/public/images/default_profile.jpeg';

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
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-[20px] top-[10px]">
          <MdClose className="text-lg" />
        </button>
        <h2>회원정보 수정</h2>
        <Image
          src={formData.avatar_url || defaultProfile_img}
          alt="Avatar"
          className="rounded-full"
          width={100}
          height={100}
        />

        <h2>이메일: {formData.email}</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex-center">
            <label htmlFor="image">프로필 이미지 변경:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="input"
              onChange={handleFileChange} // 파일 변경 핸들러 추가
            />
          </div>
          <div className="flex-center">
            <label htmlFor="user_name">닉네임:</label>
            <input
              type="text"
              id="user_name"
              name="user_name" // name 속성 수정
              value={formData.user_name}
              onChange={handleChange}
              className="input"
            />
          </div>
          <button type="submit" className="modal-submit">
            수정 완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
