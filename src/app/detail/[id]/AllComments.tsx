import React, { useEffect, useState } from 'react';
import { ParamProps } from './page';
import Comment from './Comment';
import browserClient from '@/utils/supabase/client';
import { CommentData } from '@/types/comment';

type MyCommentsProps = ParamProps & {
  ascending: boolean;
};

const AllComment = ({ params, ascending }: MyCommentsProps) => {
  const [allComments, setAllComments] = useState<CommentData[]>();

  useEffect(() => {
    const getAllComments = async () => {
      const { data, error } = await browserClient
        .from('comments')
        .select('*')
        .eq('article_id', params.id)
        .neq('user_id', '2cedb3a4-016b-4976-8aea-caa3fa555bd4')
        .order('created_at', { ascending: ascending });

      if (error) {
        console.error(error);
        return <div>댓글을 불러오는 중 오류가 발생했습니다.</div>;
      } else {
        setAllComments(data);
      }
    };
    getAllComments();
  }, [ascending, params.id]);

  return (
    <>
      {allComments?.map((comment) => (
        <article key={comment.id} className="mb-10">
          <Comment key={comment.id} comment={comment} />
        </article>
      ))}
    </>
  );
};

export default AllComment;
