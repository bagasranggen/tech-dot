import { cookies } from 'next/headers';

import { COOKIE_LOGIN_KEY } from '@/libs/mock';

export const getUserSession = async () => {
    const cookieStore = await cookies();

    return cookieStore.get(COOKIE_LOGIN_KEY);
};
