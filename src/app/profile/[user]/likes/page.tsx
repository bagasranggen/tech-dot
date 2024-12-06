import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import ProfileLikesIndex from '@/components/pages/ProfileLikesIndex';

export const metadata: Metadata = {
    title: 'Likes',
};

const Page = ({}: PageProps): React.ReactElement => {
    return <ProfileLikesIndex />;
};

export default Page;
