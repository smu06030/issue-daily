'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getCommentsByUserId } from '@/serverActions/profileActions';
import { CommentsInfo } from '@/types/mypageTypes';

const Comments = () => {
  const [comments, setComments] = useState<CommentsInfo[]>([]);
  const userId = 'caf0d4e1-9b21-4a00-ac49-93573e7637b3';

  useEffect(() => {
    const loadComments = async () => {
      const commentsData = await getCommentsByUserId(userId);
      setComments(commentsData || []);
    };
    loadComments();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {comments.map((item) => {
        return (
          <div key={item.article_id}>
            <Card likes={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
