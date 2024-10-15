'use client';
import Likes from '../../../../components/mypage/Likes';
import Profile from '@/components/mypage/Profile';
import Comments from '@/components/mypage/Comment';
const Mypage = () => {
  return (
    <div className="m-auto max-w-[800px]">
      <Profile />
      {/*  이후  */}
      <div className="likes">
        <h2 className="p-5 text-center text-lg font-bold">좋아요한 게시물</h2>
        <Likes />
      </div>
      <div className="comments">
        <h2 className="p-5 text-center text-lg font-bold">댓글 작성한 게시물</h2>
        <Comments />
      </div>
    </div>
  );
};

export default Mypage;
