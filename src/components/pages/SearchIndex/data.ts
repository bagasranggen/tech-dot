import { PageProps } from '@/libs/@types';

import { MOVIE_CATEGORIES } from '@/libs/mock';
import { axiosClient, AxiosParamsProps } from '@/libs/fetcher';
import { createMovieItem } from '@/libs/factory';

import { SearchIndexProps } from '@/components/pages/SearchIndex/index';

export const SearchData = async ({
    searchParams,
}: { uri?: string } & Pick<PageProps, 'searchParams'>): Promise<SearchIndexProps> => {
    const search = (await searchParams)?.q;
    const type = (await searchParams)?.type;

    let movieSearchParams: AxiosParamsProps[] = [];
    if (typeof search === 'string') {
        movieSearchParams = [...movieSearchParams, { key: 's', value: search }];
    }
    if (typeof type === 'string') {
        movieSearchParams = [...movieSearchParams, { key: 'type', value: type }];
    }

    const { res } = await axiosClient({
        method: 'get',
        url: 'movies-entries',
        params: movieSearchParams,
    });

    const movies: SearchIndexProps['entries']['movies'] = [];
    if (res?.Search?.length > 0) {
        res.Search.forEach((item: any) => {
            movies.push(createMovieItem(item));
        });
    }

    // Search by category "type"
    // movie, series, episode

    // console.log(res);

    return {
        entries: {
            search: (search as string) ?? '',
            movies,
            categories: MOVIE_CATEGORIES,
        },
    };
};
