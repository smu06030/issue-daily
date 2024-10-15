'use client';

import { NewsResultsType } from '@/types/newsInfo';
import browserClient from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const LikeButton = ({ el }: { el: NewsResultsType }) => {
  const [userId, setUserId] = useState<string>('');
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    getUserId();
  }, []);

  useEffect(() => {
    if (userId) {
      checkIfLiked();
    }
  }, [userId]);

  // 유저 로그인 유무 확인
  const getUserId = async () => {
    const res = await browserClient.auth.getUser();

    if (res.data.user === null) {
      setUserId('false');
    } else {
      const id = res.data.user.id.trim(); // 공백 제거
      setUserId(id);
    }
  };

  // 좋아요 여부 확인
  const checkIfLiked = async () => {
    if (userId !== 'false') {
      const { data, error } = await browserClient
        .from('likes')
        .select()
        .eq('article_id', el.article_id)
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching likes:', error);
        return;
      }

      if (data && data.length > 0) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  };

  // 즐겨찾기 버튼 클릭 시
  const onClickLikeBtn = async () => {
    if (userId === 'false') {
      alert('로그인을 해주세요.');
      return;
    }

    if (isLiked) {
      const { error } = await browserClient
        .from('likes')
        .delete()
        .eq('article_id', el.article_id)
        .eq('user_id', userId);

      if (error) {
        console.error('Error deleting like:', error);
        return;
      }

      alert('즐겨찾기에서 삭제되었습니다.');
      setIsLiked(false);
    } else {
      const { error } = await browserClient.from('likes').insert({
        article_id: el.article_id,
        user_id: userId,
        isLiked: true,
        image_url: el.image_url,
        source_name: el.source_name,
        pubDate: el.pubDate
      });

      if (error) {
        console.error('Error inserting like:', error);
        return;
      }

      alert('즐겨찾기에 추가되었습니다.');
      setIsLiked(true);
    }
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClickLikeBtn();
      }}
      className="absolute bottom-0 right-0 text-[32px]"
    >
      {isLiked ? <FaStar className="text-yellow-300" /> : <CiStar className="text-yellow-300" />}
    </button>
  );
};

export default LikeButton;
