'use client';

import Image from 'next/image';
import browserClient from '@/utils/supabase/client';

const GoogleButton = () => {
  const signInWithGoogle = async () => {
    await browserClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        },
        redirectTo: window.origin + '/auth/callback'
      }
    });
  };

  return (
    <button
      type="button"
      onClick={signInWithGoogle}
      className="mt-3 flex h-[50px] w-[348px] items-center justify-center gap-4 rounded-md font-bold text-black shadow-buttonShadow hover:bg-slate-50"
    >
      <Image src="/google.png" alt="구글" width={24} height={24} />
      <span>구글 로그인</span>
    </button>
  );
};

export default GoogleButton;
