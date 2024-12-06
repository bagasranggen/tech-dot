import { notFound } from 'next/navigation';

import { PageProps } from '@/libs/@types';
import { axiosClient } from '@/libs/fetcher';

import { MovieDetailIndexProps } from '@/components/pages/MovieDetailIndex';

export const MovieDetailData = async ({ params }: Pick<PageProps, 'params'>): Promise<MovieDetailIndexProps> => {
    const { res } = await axiosClient({
        method: 'get',
        url: 'movies-entries',
        params: [{ key: 'i', value: (await params).slug }],
    });

    if (res.Response.toLowerCase() === 'false') {
        notFound();
    }

    return {
        entries: {
            poster: [{ src: res.Poster, alt: res.Title, className: 'w-100' }],
            title: res.Title,
            plot: res.Plot,
            actors: res.Actors,
        },
    };
};
