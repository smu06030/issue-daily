import Image from 'next/image';
import React from 'react';
import DefaultProfile from '../../../../../public/images/default_profile.jpeg';
import { CommentData } from '@/types/comment';

type CommentProps = {
  comment: CommentData;
  ifEditing?: boolean;
  setEditingMessage?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Comment = ({ comment, ifEditing, setEditingMessage }: CommentProps) => {
  return (
    <div className="flex w-[calc(100%-72px)] gap-5">
      <div className="h-[50px] w-[50px]">
        {comment.avatar_url ? (
          <Image src={comment.avatar_url} alt="" width={50} height={50} className="rounded-full" unoptimized />
        ) : (
          <Image src={DefaultProfile} alt="" width={50} height={50} className="rounded-full" unoptimized />
        )}
      </div>
      <div className="relative flex w-[calc(100%-150px)] flex-col justify-center gap-[2px]">
        {comment.user_name && <h3 className="text-[0.75rem]">{comment.user_name}</h3>}
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
      </div>
    </div>
  );
};

export default Comment;
