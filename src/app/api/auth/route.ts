import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { COOKIE_LOGIN_KEY, UserProps, USERS } from '@/libs/mock';
import { createMockToken } from '@/libs/factory';

export async function GET(request: NextRequest) {
    const cookieStore = await cookies();
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    let status = 'success';
    let message = '';
    let token = '';

    const selectedUser = USERS.find((item: UserProps) => item.email === email);

    if (action === 'login') {
        // Handle error for a not found user
        if (!selectedUser) {
            status = 'error';
            message = 'User not found';
        }

        // Handle wrong password
        if (selectedUser && selectedUser.password !== password) {
            status = 'error';
            message = 'The password you entered is incorrect. Please try again.';
        }

        // Handle success login
        if (selectedUser && selectedUser.password === password) {
            token = createMockToken();
            cookieStore.set(COOKIE_LOGIN_KEY, createMockToken());
        }
    }

    // Handle logout
    if (action === 'logout') {
        cookieStore.delete(COOKIE_LOGIN_KEY);
        redirect('/');
    }

    return NextResponse.json({ status, message, token });
}
