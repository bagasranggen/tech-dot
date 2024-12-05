import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { COOKIE_LOGIN_KEY } from '@/libs/mock';

export async function GET() {
    const cookieStore = await cookies();

    cookieStore.delete(COOKIE_LOGIN_KEY);

    return NextResponse.json({ status: 'success' });
}
