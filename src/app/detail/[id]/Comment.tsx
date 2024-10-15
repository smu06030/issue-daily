import { CommentData } from '@/types/comment';
import React from 'react';

type CommentProps = {
  comment: CommentData;
  ifEditing?: boolean;
  setEditingMessage?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Comment = ({ comment, ifEditing, setEditingMessage }: CommentProps) => {
  return (
    <div className="flex w-[calc(100%-72px)] gap-5">
      <figure className="h-[50px] w-[50px] rounded-full bg-gray-400"></figure>
      <div className="relative flex w-[calc(100%-150px)] flex-col justify-center gap-[2px]">
        <h3 className="text-[0.75rem]">{comment.user_id}</h3>
        {ifEditing ? (
          <textarea
            className="w-full resize-none rounded-md border-2 border-gray-400 text-[0.875rem]"
            onChange={(e) => setEditingMessage?.(e.target.value)}
            autoFocus
          >
            {comment.message}
          </textarea>
        ) : (
          <p className="text-[0.875rem]">{comment.message}</p>
        )}
        {/* <p className="text-[0.75rem] text-gray-500">{new Date(comment.created_at).toLocaleString()}</p> */}
      </div>
    </div>
  );
};

export default Comment;
