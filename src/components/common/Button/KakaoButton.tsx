import React from 'react';
import Image from 'next/image';

const KakaoButton = () => {
  return (
    <button
      type="submit"
      className="mt-3 flex h-[50px] w-[348px] items-center justify-center gap-4 rounded-md bg-[#FAE64C] font-bold text-black shadow-buttonShadow hover:bg-[#fded6f]"
    >
      <Image src="/kakao.png" alt="카카오" width={24} height={24} />
      <span>카카오 로그인</span>
    </button>
  );
};

export default KakaoButton;
