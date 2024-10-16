'use client';
import { CardProps } from '@/types/mypageTypes';
import React from 'react';
import LikeButton from '../likes/LikeButton';

const Card = ({ likes }: CardProps) => {
  // 날짜에서 시간 제거하는 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2, '0'); // 두 자리 형식
    const minutes = String(date.getMinutes()).padStart(2, '0'); // 두 자리 형식

    return `${month}월 ${day}일 ${hours}:${minutes}`; // 원하는 형식으로 반환
  };
  return (
    <div className="shadow-custom relative max-w-[300px] overflow-hidden">
      <div className="h-[200px] w-[300px] overflow-hidden rounded-lg">
        <img
          src={likes?.image_url || '/images/default_img.jpg'}
          alt="기본 게시물 이미지"
          // fill
          className="w-[100%] object-cover"
          sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, 300px"
          // priority
        />
      </div>
      <div className="p-5">
        <p className="font-semibold">{likes?.source_name}</p>
        <p className="font- text-sm">{likes?.pubDate && formatDate(likes.pubDate)}</p>
      </div>
    </div>
  );
};

export default Card;
