import { PageProps } from '@/libs/@types';
import { axiosClient, AxiosParamsProps } from '@/libs/fetcher';

import { SearchIndexProps } from '@/components/pages/SearchIndex/index';
import { MOVIE_CATEGORIES } from '@/libs/mock';

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

    // Search by category "type"
    // movie, series, episode

    console.log(res);

    return {
        entries: {
            search: (search as string) ?? '',
            movies: res.Search,
            categories: MOVIE_CATEGORIES,
        },
    };
};
