'use client';

import React, { createContext, useEffect, useState } from 'react';

import { COOKIE_LOGIN_KEY, UserProps } from '@/libs/mock';
import { axiosClient } from '@/libs/fetcher';

import { getCookie } from 'cookies-next/client';

export type UserState = {
    user: UserProps | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserState['user']>>;
    userLoginHandler: (
        props: { onSuccess?: (username: string) => void } & Record<'email' | 'password', string>
    ) => void;
    userLogoutHandler: (props: { onSuccess?: () => void }) => void;
};

export const UserStateContext = createContext<UserState>({
    user: undefined,
    setUser: () => {},
    userLoginHandler: () => {},
    userLogoutHandler: () => {},
});

export const UserStateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const userSession = getCookie(COOKIE_LOGIN_KEY);

    const [user, setUser] = useState<UserState['user']>(undefined);
    const [userIsLogged, setUserIsLogged] = useState<boolean>(!!userSession);

    const getUser = async (username: string) => {
        const { res } = await axiosClient({
            method: 'get',
            url: 'user',
            params: [{ key: 'username', value: username }],
        });

        if (res.status === 'success') {
            setUser(res.data.user);
        }
    };

    const userLoginHandler = async ({
        email,
        password,
        onSuccess,
    }: { onSuccess?: (username: string) => void } & Record<'email' | 'password', string>) => {
        const { res } = await axiosClient({
            method: 'get',
            url: 'auth/login',
            params: [
                { key: 'email', value: email },
                { key: 'password', value: password },
            ],
        });

        if (res.status === 'success' && onSuccess) {
            onSuccess(res.data.username);
            setUserIsLogged(true);
        }
    };

    const userLogoutHandler = async ({ onSuccess }: { onSuccess?: () => void }) => {
        const { res } = await axiosClient({ method: 'get', url: 'auth/logout' });

        if (res.status === 'success' && onSuccess) {
            onSuccess();
            setUserIsLogged(false);
            setUser(undefined);
        }
    };

    useEffect(() => {
        if (!userSession) return;
        if (!userIsLogged) return;

        getUser(userSession);
    }, [userSession, userIsLogged]);

    const defaultContext = { user, setUser, userLoginHandler, userLogoutHandler };

    return <UserStateContext.Provider value={defaultContext}>{children}</UserStateContext.Provider>;
};
