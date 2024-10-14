import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const userInfo = await request.json();
  const serverClient = createClient();
  
  const {
    data: { user },
    error
  } = await serverClient.auth.signInWithPassword({
    email: userInfo.email,
    password: userInfo.password
  });

  if(error){
    return NextResponse.json({ user: null, error: error.message }, 
      { status: 500 });
  }

  return NextResponse.json({ user });
};
