'use client';

import { useUserStore } from '@/providers/userStoreProvider';
import { NewsResultsType } from '@/types/newsInfo';
import browserClient from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const LikeButton = ({ el }: { el: NewsResultsType }) => {
  const { isUser } = useUserStore((state) => state);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (isUser) {
      checkIsLike();
    } else {
      setIsLiked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUser]);

  // 즐겨찾기 여부 확인
  const checkIsLike = async () => {
    const { data } = await browserClient.auth.getUser();
    const userId = data.user?.id ?? null;

    if (isUser) {
      const { data, error } = await browserClient
        .from('likes')
        .select()
        .eq('article_id', el.article_id)
        .eq('user_id', userId);

      if (error) {
        console.error('Error:', error);
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
    if (!isUser) {
      alert('로그인을 해주세요.');
      return;
    }

    const { data } = await browserClient.auth.getUser();
    const userId = data.user?.id ?? null;

    if (isLiked) {
      const { error } = await browserClient
        .from('likes')
        .delete()
        .eq('article_id', el.article_id)
        .eq('user_id', userId);

      if (error) {
        console.error('Error:', error);
        return;
      }

      setIsLiked(false);
      alert('즐겨찾기에서 삭제되었습니다.');
    } else {
      const { error } = await browserClient.from('likes').insert({
        article_id: el.article_id,
        user_id: userId,
        isLiked: true,
        image_url: el.image_url,
        source_name: el.source_name,
        pubDate: el.pubDate,
        title: el.title,
        category: el.category[0]
      });

      if (error) {
        console.error('Error:', error);
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
