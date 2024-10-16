import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const DELETE = async () => {
  const serverClient = createClient();

  await serverClient.auth.signOut();

  return NextResponse.json({ message: '로그아웃 했습니다.' }, { status: 200 });
};
