import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import ProfileDashboardIndex from '@/components/pages/ProfileDashboardIndex';

export const metadata: Metadata = {
    title: 'Dashboard',
};

const Page = ({}: PageProps): React.ReactElement => {
    return <ProfileDashboardIndex />;
};

export default Page;
