import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import ProfileLoginIndex from '@/components/pages/ProfileLoginIndex';

export const metadata: Metadata = {
    title: 'Login',
};

const Page = ({}: PageProps): React.ReactElement => {
    return <ProfileLoginIndex />;
};

export default Page;
