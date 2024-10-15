import { CommentData } from '@/types/Comment';
import React from 'react';

type CommentProps = {
  comment: CommentData;
  ifEditing?: boolean;
  setEditingMessage?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Comment = ({ comment, ifEditing, setEditingMessage }: CommentProps) => {
  return (
    <div className="flex gap-5 w-[calc(100%-72px)]">
      <figure className="rounded-full bg-gray-400 w-[50px] h-[50px]"></figure>
      <div className="flex flex-col justify-center w-[calc(100%-150px)] gap-[2px] relative">
        <h3 className="text-[0.75rem]">{comment.user_id}</h3>
        {ifEditing ? (
          <textarea
            className="text-[0.875rem] w-full resize-none border-2 rounded-md border-gray-400"
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
