'use client';
import Likes from '../../../../components/mypage/Likes';
import Profile from '@/components/mypage/Profile';
import Comments from '@/components/mypage/Comment';
import { useEffect, useState } from 'react';
import { fetchUsers } from '@/serverActions/profileActions';
import { FaComments, FaStar } from 'react-icons/fa';
const Mypage = () => {
  const [userId, setUserId] = useState<string | null>(null);
  // 사용자 ID를 불러오는 함수
  const loadUserId = async () => {
    const id = await fetchUsers();
    setUserId(id);
  };
  useEffect(() => {
    loadUserId();
  }, []);

  return (
    <div className="m-auto max-w-[1200px] pb-12">
      <Profile />
      {/*  이후  */}
      <div className="likes border-b-2 border-b-slate-100 pb-[80px]">
        <h2 className="flex items-center gap-3 p-16 text-2xl font-bold">
          <FaStar className="text-yellow-300" />
          즐겨찾기한 게시물
        </h2>
        <Likes userId={userId} />
      </div>
      <div className="comments">
        <h2 className="flex items-center gap-3 p-16 text-2xl font-bold">
          <FaComments className="text-[#6a3c06]" />
          댓글 작성한 게시물
        </h2>
        <Comments userId={userId} />
      </div>
    </div>
  );
};

export default Mypage;
