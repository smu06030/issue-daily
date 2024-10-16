'use client';
import { useQuery } from '@tanstack/react-query';
import { UserProfile } from '@/types/mypageTypes';
import { fetchUsers, getProfileByUserId } from '@/serverActions/profileActions';
import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Image from 'next/image';
import Modal from './Modal';

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
    <div className="profile flex-j-center mx-auto flex-wrap gap-6 bg-[#f3f3f3] py-10">
      <div>
        <Image
          src={userProfile?.avatar_url || '/images/default_profile.jpeg'}
          alt="Avatar"
          className="rounded-full object-cover"
          width={150}
          height={150}
        />
      </div>
      <div className="flex-j-text-center flex-col gap-3 text-xl sm:text-start">
        <p>
          <b>{userProfile ? userProfile.user_name : ''}님</b> 안녕하세요
        </p>
        <p>관심있는 뉴스를 찾아보세요!</p>
        <button
          className="flex-i-center h-[40px] w-[206px] gap-7 rounded-[10px] border border-[#d0d0d0] px-4 py-1 font-bold"
          onClick={() => setIsModalOpen(true)}
        >
          <FaEdit className="text-gray-600" />내 정보 관리
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
