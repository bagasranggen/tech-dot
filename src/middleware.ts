import { NextRequest, NextResponse } from 'next/server';

import { getUserSession } from '@/libs/server-utils';

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const session = await getUserSession();

    // Redirect to login page
    if (!session && pathname !== '/profile/login') {
        return NextResponse.redirect(new URL('/profile/login', request.url));
    }

    // Redirect to user page if user go to `/profile`
    if (session && pathname === '/profile') {
        return NextResponse.redirect(new URL(`/profile/${session.value}`, request.url));
    }
}

export const config = {
    matcher: ['/profile/:path*'],
};
