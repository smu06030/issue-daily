import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const userInfo = await request.json();
  const serverClient = createClient();

  const {
    data: { user },
    error
  } = await serverClient.auth.signUp({
    email: userInfo.email,
    password: userInfo.password,
    options: {
      data: {
        user_name: userInfo.nickname
      }
    }
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: '회원가입을 성공했습니다.' });
};
