'use client';

import { PropsWithChildren } from 'react';

import Navigation from '@/components/layout/Navigation';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    );
}
