import { NextRequest, NextResponse } from 'next/server';
import getSession from './app/lib/session';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log('geelo');
}

// 미들웨어를 필터링하여 특정 경로들에서만 실행되도록 할 수 있다.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)&).*)',
  ],
};
