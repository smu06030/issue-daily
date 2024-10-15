'use client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { UserProfile } from '@/types/mypageTypes';
import { fetchUsers, getProfileByUserId } from '@/serverActions/profileActions';

const Profile = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태

  useEffect(() => {
    const loadUserId = async () => {
      const id = await fetchUsers();
      setUserId(id);
    };

    loadUserId();
  }, []);

  const {
    data: user,
    isLoading,
    error
  } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getProfileByUserId(userId),
    enabled: !!userId // userId가 있을때만 패치 진행
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (error) {
    return <p>오류 발생: {error.message}</p>;
  }

  const userProfile: UserProfile = user ? user[0] : null;

  return (
    <div className="profile flex flex-wrap justify-center gap-6 p-10">
      <div>
        <Image
          src={userProfile?.avatar_url || '/images/default_profile.jpeg'}
          alt="Avatar"
          className="rounded-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className="profileText flex flex-col justify-center text-center sm:text-start">
        <p>
          <b>{userProfile ? userProfile.user_name : ''}님</b> 안녕하세요
        </p>
        <p>개발 관련 게시물을 저장해보세요!</p>
        <button
          className="border-primary-100 h-[40px] w-[206px] rounded-[10px] border px-4 py-1 font-bold"
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
