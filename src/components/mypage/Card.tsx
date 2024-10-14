import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = () => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['likes', userId]
  // });
  return (
    // <Link href={}>
    <div>
      <div className="w-[200px] h-[130px] overflow-hidden relative rounded-lg">
        <Image
          src={'/images/default_img.jpg'}
          alt="기본 게시물 이미지"
          fill
          className="object-cover absolute"
          sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, 300px"
          priority
        ></Image>
      </div>
      <p>title</p>
      <p>작성시간|작성자</p>
    </div>
    // </Link>
  );
};

export default Card;
