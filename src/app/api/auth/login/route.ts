import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { COOKIE_LOGIN_KEY, UserProps, USERS } from '@/libs/mock';

export async function GET(request: NextRequest) {
    const cookieStore = await cookies();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    let status = 'success';
    let message = '';
    let username = '';

    const selectedUser = USERS.find((item: UserProps) => item.email === email);

    // Handle empty data
    if (!email || !password) {
        status = 'error';
        message = 'Please enter a valid credentials.';
    }

    // Handle error for a not found user
    if (email && !selectedUser) {
        status = 'error';
        message = 'User not found.';
    }

    // Handle wrong password
    if (selectedUser && selectedUser.password !== password) {
        status = 'error';
        message = 'The password you entered is incorrect. Please try again.';
    }

    // Handle success login
    if (selectedUser && selectedUser.password === password) {
        username = selectedUser.username;
        cookieStore.set(COOKIE_LOGIN_KEY, selectedUser.username);
    }

    return NextResponse.json({ status, data: { message, username } });
}
