'use client';

import Image from 'next/image';
import browserClient from '@/utils/supabase/client';

const GoogleButton = () => {
  const signInWithGoogle = async () => {
    await browserClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.origin + '/auth/callback'
      }
    });
  };

  return (
    <button
      type="button"
      onClick={signInWithGoogle}
      className="flex justify-center gap-4 items-center w-[348px] h-[50px] mt-3 shadow-buttonShadow rounded-md text-black font-bold hover:bg-slate-50"
    >
      <Image src="/google.png" alt="구글" width={24} height={24} />
      <span>구글 로그인</span>
    </button>
  );
};

export default GoogleButton;
