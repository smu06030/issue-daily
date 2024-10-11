import Image from 'next/image';
import React from 'react';
import Likes from './Likes';

const Mypage = () => {
  return (
    <div className="m-auto max-w-[800px]">
      <div className=" profile flex justify-center gap-6 p-10 flex-wrap">
        <Image
          src={'/images/default_profile.jpeg'}
          alt="프로필 기본 이미지"
          width={100}
          height={100}
          className="rounded-full"
        ></Image>
        <div className="profileText flex flex-col text-center sm:text-start justify-center">
          <p>
            <b>지영님</b> 안녕하세요
          </p>
          <p>개발 관련 게시물을 저장해보세요!</p>
          <button
            className="rounded-[10px] border border-solid border-primary-100
        font-bold bg-white text-primary-600  py-1 px-4 undefined hover:bg-primary-100 hover:text-secondary-800 w-[206px] h-[40px] flex items-center justify-center"
          >
            내 정보 관리
          </button>
        </div>
      </div>

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
