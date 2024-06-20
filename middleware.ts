import { NextRequest, NextResponse } from 'next/server';
import getSession from './app/lib/session';
import { boolean } from 'zod';

interface Routes {
  [key: string]: boolean;
}
const publicOnlyUrls: Routes = {
  '/': true,
  '/login': true,
  '/sms': true,
  '/create-account': true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  // 로그인 한 유저가 아닌 경우
  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    // 로그인 한 경우
    if (exists) {
      return NextResponse.redirect(new URL('/products', request.url));
    }
  }
}

// 미들웨어를 필터링하여 특정 경로들에서만 실행되도록 할 수 있다.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
