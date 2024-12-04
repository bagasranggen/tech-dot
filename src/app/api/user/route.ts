import { NextRequest, NextResponse } from 'next/server';

import { UserProps, USERS } from '@/libs/mock';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get('username');

    const selectedUser = USERS.find((item: UserProps) => item.username === username);

    return NextResponse.json({
        status: selectedUser ? 'success' : 'error',
        message: !selectedUser ? 'Cannot find user' : '',
        user: selectedUser,
    });
}
