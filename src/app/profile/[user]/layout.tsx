'use client';

import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

import { axiosClient } from '@/libs/fetcher';

import Button from '@/components/common/Button';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
    const router = useRouter();

    const logoutHandler = async () => {
        const { res } = await axiosClient({ method: 'get', url: 'auth/logout' });

        if (res.status === 'success') {
            router.push('/');
        }
    };

    return (
        <>
            <Button
                as="button"
                type="button"
                onClick={logoutHandler}>
                LOGOUT
            </Button>
            {children}
        </>
    );
}
