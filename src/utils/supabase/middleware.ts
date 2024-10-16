import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers
      }
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
            response = NextResponse.next({
              request
            });
            cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
          }
        }
      }
    );

    const { data } = await supabase.auth.getUser();

    // 로그인 한 상태라면 메인페이지로 리다이렉트
    if (
      data?.user &&
      (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup'))
    ) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // 로그인을 하지 않았는데 접근한다면 로그인 페이지로 리다이렉트
    if (
      !data?.user &&
      (request.nextUrl.pathname.startsWith('/mypage') || request.nextUrl.pathname.startsWith('/update-password'))
    ) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return response;
  } catch (e) {
    console.log(e, 'error');
    return NextResponse.next({
      request: {
        headers: request.headers
      }
    });
  }
};
