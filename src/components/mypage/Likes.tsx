'use client';
import React, { useEffect, useState } from 'react';
import { NewsResultsType } from '@/types/newsInfo';
import { getLikesByUserId } from '@/serverActions/profileActions';
import Card from './Card';
import Link from 'next/link';

type Props = {
  userId: string | null;
};
const Likes = ({ userId }: Props) => {
  const [likes, setLikes] = useState<NewsResultsType[]>([]);

  // 사용자의 좋아요를 불러오는 함수
  const loadLikes = async (userId: string) => {
    if (userId) {
      const likesData = await getLikesByUserId(userId);
      setLikes(likesData || []);
    }
  };

  // userId가 변경될 때마다 likes를 불러오기
  useEffect(() => {
    if (userId) {
      loadLikes(userId);
    }
  }, [userId]);

  return (
    <div className="flex-j-center flex-wrap gap-8">
      {likes.length === 0 ? (
        <div className="flex-i-text-center min-h-[100px] flex-col gap-5">
          <p className="text-lg font-bold">즐겨찾기한 게시물이 없습니다.</p>
          <p className="text-md font-bold text-slate-500">관심있는 뉴스를 찾아보세요!</p>
          <Link href={'/'} className="mypage-sub-title">
            최신 뉴스 확인하기
          </Link>
        </div>
      ) : (
        likes.map((item) => (
          <div key={item.article_id} className="relative">
            <Link href={`/detail/${item.category}/${item.article_id}`}>
              <Card likes={item} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Likes;
