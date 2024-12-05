'use client';

import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

import { useUserStateContext } from '@/store/Context';

import Button from '@/components/common/Button';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
    const router = useRouter();
    const { userLogoutHandler } = useUserStateContext();

    return (
        <>
            <Button
                as="button"
                type="button"
                onClick={() => userLogoutHandler({ onSuccess: () => router.push('/') })}>
                LOGOUT
            </Button>
            {children}
        </>
    );
}
