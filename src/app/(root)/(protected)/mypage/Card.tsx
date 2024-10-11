import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
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
  );
};

export default Card;
