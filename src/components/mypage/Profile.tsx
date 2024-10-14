'use client';
import browserClient from '@/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
type UserProfile = {
  id: string;
  user_name: string;
  email: string;
  avatar_url?: string | null; // avatar_url이 없거나 null일 수 있음을 명시
};

const Profile = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태

  useEffect(() => {
    const loadUsers = async () => {
      const { data } = await browserClient.auth.getUser();
      const uuid = data.user?.id ?? null; // uuid가 undefined일 경우 null로 설정
      setUserId(uuid); // 상태에 UUID 저장
    };
    loadUsers();
  }, []);
  // 쿼리펑션, 이거는 유저 아이디를 받아서 슈퍼베이스의 프로필 테이블에서 정보를 가져오는 함수
  const getProfileByUserId = async () => {
    if (!userId) return null;
    const { data, error } = await browserClient.from('profiles').select('*').eq('id', userId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  const {
    data: user,
    isLoading,
    error
  } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getProfileByUserId()
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (error) {
    return <p>오류 발생: {error.message}</p>;
  }

  const userProfile: UserProfile = user ? user[0] : null;

  return (
    <div className="profile flex justify-center gap-6 p-10 flex-wrap">
      <div>
        <Image
          src={userProfile?.avatar_url || '/images/default_profile.jpeg'}
          alt="Avatar"
          className="rounded-full"
          width={100}
          height={100}
        />
      </div>
      <div className="profileText flex flex-col text-center sm:text-start justify-center">
        <p>
          <b>{userProfile ? userProfile.user_name : ''}님</b> 안녕하세요
        </p>
        <p>개발 관련 게시물을 저장해보세요!</p>
        <button
          className="rounded-[10px] border border-primary-100 font-bold py-1 px-4 w-[206px] h-[40px] "
          onClick={() => setIsModalOpen(true)} // 모달 열기
        >
          내 정보 관리
        </button>
      </div>

      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // 모달 닫기
        userProfile={userProfile}
        userId={userId}
      />
    </div>
  );
};

export default Profile;
