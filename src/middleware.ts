import type { NextRequest } from 'next/server';
import { updateSession } from './utils/supabase/middleware';

export const middleware = async (request: NextRequest) => {
  return await updateSession(request);
};

export const config = {
  matcher: ['/mypage/:path*', '/login', '/signup']
};
