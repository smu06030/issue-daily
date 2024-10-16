import React, { useEffect, useState } from 'react';
import { ParamProps } from './page';
import Comment from './Comment';
import browserClient from '@/utils/supabase/client';
import { CommentData } from '@/types/comment';

type MyCommentsProps = ParamProps & {
  ascending: boolean;
  userId: string | null | undefined;
};

const AllComment = ({ params, ascending, userId }: MyCommentsProps) => {
  const [allComments, setAllComments] = useState<CommentData[]>();

  useEffect(() => {
    const getAllComments = async () => {
      const { data, error } = await browserClient
        .from('comments')
        .select('*')
        .eq('article_id', params.id)
        .neq('user_id', userId)
        .order('created_at', { ascending: ascending });

      if (error) {
        console.error(error);
      } else {
        setAllComments(data);
      }
    };
    getAllComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
