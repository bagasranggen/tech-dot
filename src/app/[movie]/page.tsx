import React from 'react';

import { PageProps } from '@/libs/@types';
import { axiosClient } from '@/libs/fetcher';

import MovieDetailIndex from '@/components/pages/MovieDetailIndex';

const Page = async ({ params, searchParams }: PageProps): Promise<React.ReactElement> => {
    const { res } = await axiosClient({
        method: 'get',
        url: 'movies-entries',
        params: [{ key: 't', value: (await params).movie }],
    });
    console.log({ params: await params, searchParams: await searchParams, res });

    return <MovieDetailIndex />;
};

export default Page;
