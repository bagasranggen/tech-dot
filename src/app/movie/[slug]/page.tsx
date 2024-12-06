import React from 'react';

import { PageProps } from '@/libs/@types';

import MovieDetailIndex from '@/components/pages/MovieDetailIndex';
import { MovieDetailData } from '@/components/pages/MovieDetailIndex/data';

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const { entries } = await MovieDetailData({ params });

    return <MovieDetailIndex entries={entries} />;
};

export default Page;
