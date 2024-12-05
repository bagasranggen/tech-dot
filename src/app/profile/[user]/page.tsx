'use client';

import React from 'react';

import { useUserStateContext } from '@/store/Context';

export type PageProps = {};

const Page = ({}: PageProps): React.ReactElement => {
    const { user } = useUserStateContext();

    return (
        <>
            <h1>Hi, {user?.name}!</h1>
        </>
    );
};

export default Page;
