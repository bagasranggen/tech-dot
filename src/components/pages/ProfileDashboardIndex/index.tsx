'use client';

import React from 'react';

import { useUserStateContext } from '@/store/Context';

export type ProfileDashboardIndexProps = {};

const ProfileDashboardIndex = ({}: ProfileDashboardIndexProps): React.ReactElement => {
    const { user } = useUserStateContext();

    return (
        <>
            <h1>Hi, {user?.name}!</h1>
        </>
    );
};

export default ProfileDashboardIndex;
