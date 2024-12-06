import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import { SearchData } from '@/components/pages/SearchIndex/data';
import SearchIndex from '@/components/pages/SearchIndex';

export const generateMetadata = async ({ searchParams }: PageProps): Promise<Metadata> => {
    return {
        title: `Search: ${(await searchParams)?.q}`,
    };
};

const Page = async ({ searchParams }: PageProps): Promise<React.ReactElement> => {
    const { entries } = await SearchData({ searchParams: searchParams });

    return <SearchIndex entries={entries} />;
};

export default Page;
