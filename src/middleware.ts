import { NextRequest, NextResponse } from 'next/server';

import { COOKIE_LOGIN_KEY } from '@/libs/mock';

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const isLoggedIn = request.cookies.get(COOKIE_LOGIN_KEY);

    // Redirect to login page
    if (!isLoggedIn && pathname !== '/profile/login') {
        return NextResponse.redirect(new URL('/profile/login', request.url));
    }

    // Redirect to user page if user go to `/profile`
    if (isLoggedIn && pathname === '/profile') {
        return NextResponse.redirect(new URL(`/profile/${isLoggedIn.value}`, request.url));
    }
}

export const config = {
    matcher: ['/profile/:path*'],
};
