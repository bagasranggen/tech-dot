import React from 'react';
import { Metadata } from 'next';

import { PageProps } from '@/libs/@types';

import MovieDetailIndex from '@/components/pages/MovieDetailIndex';
import { MovieDetailData } from '@/components/pages/MovieDetailIndex/data';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { entries } = await MovieDetailData({ params });

    return {
        title: entries.title,
    };
};

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
    const { entries } = await MovieDetailData({ params });

    return <MovieDetailIndex entries={entries} />;
};

export default Page;
