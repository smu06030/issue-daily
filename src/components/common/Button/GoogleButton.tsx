import React from 'react'
import Image from 'next/image';

const GoogleButton = () => {
  return (
    <button
      type="submit"
      className="flex justify-center gap-4 items-center w-[348px] h-[50px] mt-3 shadow-buttonShadow rounded-md text-black font-bold hover:bg-slate-50"
    >
      <Image src="/google.png" alt="구글" width={24} height={24}/>
      <span>구글 로그인</span> 
    </button>
  )
}

export default GoogleButton