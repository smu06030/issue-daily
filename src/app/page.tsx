import { createClient } from '@/utils/supabase/server';
import React from 'react';

export default function Home() {
  const serverClient = createClient();
  console.log(serverClient.auth.getUser())
  return (
    <div className="font-pretendard">
      <div className="font-thin">dsfsdf</div>
      <div className="font-bold">dsfsdf</div>
      <div className="font-medium">dsfsdf</div>
    </div>
  );
}
