import React from 'react';
import Image from 'next/image';

const KakaoButton = () => {
  return (
    <button
      type="submit"
      className="flex justify-center gap-4 items-center w-[348px] h-[50px] mt-3 shadow-buttonShadow bg-[#FAE64C] rounded-md text-black font-bold hover:bg-[#fded6f]"
    >
      <Image src="/kakao.png" alt="카카오" width={24} height={24}/>
      <span>카카오 로그인</span> 
    </button>
  );
};

export default KakaoButton;
