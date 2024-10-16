'use client';

import React, { useEffect, useState } from 'react';
import browserClient from '@/utils/supabase/client';
import AllComments from './AllComments';
import MyComments from './MyComments';
import { ParamProps } from './page';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUsers, getProfileByUserId } from '@/serverActions/profileActions';
import Image from 'next/image';
import DefaultProfile from '../../../../../public/images/default_profile.jpeg';

type CommentsProps = ParamProps & {
  prevArticle:
    | {
        source_name: string;
        pubDate: string;
        image_url: string | null;
        title: string;
      }
    | undefined;
};

const Comments = ({ params, prevArticle }: CommentsProps) => {
  const queryClient = useQueryClient();
  const [ascending, setAscending] = useState<boolean>(false);
  const [comment, setComment] = useState('');
  const [countMyComments, setCountMyComments] = useState<number | null>();
  const [userId, setUserId] = useState<string | null>();
  const [userProfile, setUserProfile] = useState({
    avatar_url: '',
    user_name: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userid = await fetchUsers();
      const userprofile = await getProfileByUserId(userid);
      setUserId(userid);
      console.log(userprofile);
      if (userprofile) {
        setUserProfile({
          avatar_url: userprofile[0].avatar_url,
          user_name: userprofile[0].user_name
        });
      }
    };
    fetchUser();
  }, []);

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
        await browserClient.from('comments').insert([
          {
            article_id: params.id,
            user_id: userId,
            message: comment,
            source_name: prevArticle?.source_name,
            pubDate: prevArticle?.pubDate,
            image_url: prevArticle?.image_url,
            title: prevArticle?.title,
            avatar_url: userProfile.avatar_url,
            user_name: userProfile.user_name
          }
        ]);
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
    queryKey: ['countComments', params.id],
    queryFn: countComment
  });

  const { mutate } = useMutation({
    mutationFn: onAddComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['countComments'] });
    }
  });

  if (isCountPending) {
    return <div className="mx-auto mt-20 max-w-[1000px]">로딩중...</div>;
  }

  if (isCountError) {
    return <div>오류가 발생했습니다</div>;
  }

  return (
    <div className="mx-auto mt-20 max-w-[1000px]">
      <div className="flex gap-10">
        <p className="text-[1.4rem]">댓글 {count}개</p>
        <button onClick={() => setAscending((prev) => !prev)} className="rounded-md bg-gray-400 px-3 text-white">
          {ascending ? '오름차순' : '내림차순'}
        </button>
      </div>

      <div className="mt-5 flex gap-5">
        {userProfile ? (
          <>
            {userProfile.avatar_url ? (
              <Image src={userProfile.avatar_url} alt="" width={50} height={50} className="rounded-full" unoptimized />
            ) : (
              <Image src={DefaultProfile} alt="" width={50} height={50} className="rounded-full" unoptimized />
            )}

            <div className="relative flex w-[calc(100%-70px)] flex-col justify-center gap-[2px]">
              {userProfile.user_name && <p className="text-[0.75rem]">{userProfile.user_name}</p>}
              <input
                className="border-b border-gray-300 text-[0.875rem] outline-none focus:border-gray-500"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyPress={handleEnterPress}
                placeholder="댓글을 입력하세요"
              />
              <button
                onClick={() => mutate()}
                className={`absolute -bottom-9 right-0 rounded-lg px-4 py-1 ${
                  comment.length === 0 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white'
                }`}
              >
                입력
              </button>
            </div>
          </>
        ) : (
          <>
            <Image src={DefaultProfile} alt="" width={50} height={50} className="rounded-full" unoptimized />
            <div className="relative flex w-[calc(100%-70px)] flex-col justify-center gap-[2px]">
              <p className="border-b border-gray-300 text-[0.875rem] outline-none focus:border-gray-500">
                댓글을 등록하려면 로그인하세요
              </p>
            </div>
          </>
        )}
      </div>

      <div className="mt-20">
        <MyComments userId={userId} ascending={ascending} params={params} countMyComments={countMyComments} />
        <AllComments userId={userId} ascending={ascending} params={params} />
      </div>
    </div>
  );
};

export default Comments;
