'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getLikesByUserId } from '@/serverActions/profileActions';
import { LikesInfo } from '@/types/mypageTypes';
import Link from 'next/link';
const url = 'http://localhost:3000';
const Likes = () => {
  const [likes, setLikes] = useState<LikesInfo[]>([]);
  const userId = 'caf0d4e1-9b21-4a00-ac49-93573e7637b3';

  useEffect(() => {
    const loadLikes = async () => {
      const likesData = await getLikesByUserId(userId);
      setLikes(likesData || []);
    };
    loadLikes();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {likes.map((item) => {
        return (
          <Link key={item.article_id} href={`${url}/detail/${item.article_id}`}>
            <Card likes={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default Likes;
