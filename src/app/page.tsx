import { createClient } from '@/utils/supabase/server';
import { combineChunks } from '@supabase/ssr';
import React from 'react';

export default async function Home() {
  // const serverClient = createClient();
  // const {
  //   data: { user }
  // } = await serverClient.auth.getUser();

  // console.log(user)

  return (
    <div className="font-pretendard">
      <div className="font-thin">dsfsdf</div>
      <div className="font-bold">dsfsdf</div>
      <div className="font-medium">dsfsdf</div>
    </div>
  );
}
