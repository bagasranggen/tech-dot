import React from 'react';

import { PageProps } from '@/libs/@types';

import { SearchData } from '@/components/pages/SearchIndex/data';
import SearchIndex from '@/components/pages/SearchIndex';

const Page = async ({ searchParams }: PageProps): Promise<React.ReactElement> => {
    const { entries } = await SearchData({ searchParams: searchParams });

    return <SearchIndex entries={entries} />;
};

export default Page;
