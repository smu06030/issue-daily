'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getCommentsByUserId } from '@/serverActions/profileActions';
import Link from 'next/link';
import { NewsResultsType } from '@/types/newsInfo';
const url = 'http://localhost:3000';
type Props = {
  userId: string | null;
};
const Comments = ({ userId }: Props) => {
  const [comments, setComments] = useState<NewsResultsType[]>([]);
  const loadComments = async (userId: string) => {
    const commentsData = await getCommentsByUserId(userId);
    setComments(commentsData || []);
  };
  useEffect(() => {
    if (userId) {
      loadComments(userId);
    }
  }, [userId]);
  return (
    <div className="flex-j-center flex-wrap gap-8">
      {comments.length === 0 ? (
        <div className="flex-i-text-center min-h-[100px] flex-col gap-5">
          <p className="text-lg font-bold">댓글을 작성한 게시물이 없습니다.</p>
          <p className="text-md font-bold text-slate-500">관심있는 뉴스를 찾아보세요!</p>
          <Link href={'/'} className="mypage-sub-title">
            인기 뉴스 확인하기
          </Link>
        </div>
      ) : (
        comments.map((item) => (
          <Link key={item.article_id} href={`${url}/detail/${item.article_id}`}>
            <Card likes={item} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Comments;
