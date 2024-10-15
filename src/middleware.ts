import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from './utils/supabase/server';

export const middleware = async (request: NextRequest) => {
  const serverClient = createClient();

  const { data } = await serverClient.auth.getUser();

  // 로그인 한 상태라면 메인페이지로 리다이렉트
  if (data?.user && (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 로그인을 하지 않았는데 마이페이지에 접근한다면 로그인 페이지로 리다이렉트
  if (!data?.user && request.nextUrl.pathname.startsWith('/mypage')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 그 외 요청은 계속 진행
  return NextResponse.next();
};

// 로그인이 되어 있으면 계속 진행
export const config = {
  matcher: ['/mypage/:path*', '/login', '/signup']
};
