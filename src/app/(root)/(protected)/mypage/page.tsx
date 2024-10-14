'use client';
import React, { useEffect, useState } from 'react';
import Likes from '../../../../components/mypage/Likes';
import Profile from '@/components/mypage/Profile';
const Mypage = () => {
  return (
    <div className="m-auto max-w-[800px]">
      <Profile />
      {/*  이후  */}
      <div className="likes">
        <h2 className="text-center p-5 font-bold text-lg">좋아요한 게시물</h2>
        <Likes />
      </div>
      <div className="comments">
        <h2 className="text-center p-5 font-bold text-lg">댓글 작성한 게시물</h2>
        <Likes />
      </div>
    </div>
  );
};

export default Mypage;
