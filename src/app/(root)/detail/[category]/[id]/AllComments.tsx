import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { CommentData, ParamProps } from '@/types/comment';
import { getAllComments } from '@/serverActions/commentsActions';

type MyCommentsProps = ParamProps & {
  ascending: boolean;
  userId: string | null | undefined;
};

const AllComment = ({ params, ascending, userId }: MyCommentsProps) => {
  const [allComments, setAllComments] = useState<CommentData[]>();

  useEffect(() => {
    const fetchGetAllComments = async () => {
      const data = await getAllComments({ params, userId, ascending });
      console.log(data);
      setAllComments(data);
    };

    fetchGetAllComments();
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
