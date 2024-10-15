'use client';

import React, { useState } from 'react';
import browserClient from '@/utils/supabase/client';
import AllComments from './AllComments';
import MyComments from './MyComments';
import { ParamProps } from './page';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const Comments = ({ params }: ParamProps) => {
  const queryClient = useQueryClient();
  const [ascending, setAscending] = useState<boolean>(false);
  const [comment, setComment] = useState('');
  const [countMyComments, setCountMyComments] = useState<number | null>();

  const countComment = async () => {
    const { count, error } = await browserClient
      .from('comments')
      .select('*', { count: 'exact', head: true })
      .eq('article_id', params.id);
    if (error) {
      console.error('Error:', error);
    } else {
      setCountMyComments(count);
      return count;
    }
  };

  const onAddComment = async () => {
    if (comment.length > 0) {
      try {
        await browserClient
          .from('comments')
          .insert([{ article_id: params.id, user_id: '2cedb3a4-016b-4976-8aea-caa3fa555bd4', message: comment }]);
        setComment('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && comment.length > 0) {
      onAddComment();
    }
  };

  const {
    data: count,
    isPending: isCountPending,
    isError: isCountError
  } = useQuery({
    queryKey: ['countComments'],
    queryFn: countComment
  });

  const { mutate } = useMutation({
    mutationFn: onAddComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['countComments'] });
    }
  });

  if (isCountPending) {
    return <div className="mt-20 max-w-[1000px] mx-auto">로딩중...</div>;
  }

  if (isCountError) {
    return <div>오류가 발생했습니다</div>;
  }

  return (
    <div className="mt-20 max-w-[1000px] mx-auto">
      <div className="flex gap-10">
        <p className="text-[1.4rem]">댓글 {count}개</p>
        <button onClick={() => setAscending((prev) => !prev)} className="bg-gray-400 text-white px-3 rounded-md">
          {ascending ? '오름차순' : '내림차순'}
        </button>
      </div>

      <div className="flex gap-5 mt-5">
        <figure className="rounded-full bg-gray-400 w-[50px] h-[50px]"></figure>
        <div className="flex flex-col justify-center w-[calc(100%-70px)] gap-[2px] relative">
          <p className="text-[0.75rem]">닉네임</p>
          <input
            className="outline-none border-b text-[0.875rem] border-gray-300 focus:border-gray-500"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={handleEnterPress}
            placeholder="댓글을 입력하세요"
          />
          <button
            onClick={() => mutate()}
            className={`absolute right-0 -bottom-9 px-4 py-1 rounded-lg ${
              comment.length === 0 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white'
            }`}
          >
            입력
          </button>
        </div>
      </div>

      <div className="mt-20">
        <MyComments ascending={ascending} params={params} countMyComments={countMyComments} />
        <AllComments ascending={ascending} params={params} />
      </div>
    </div>
  );
};

export default Comments;
