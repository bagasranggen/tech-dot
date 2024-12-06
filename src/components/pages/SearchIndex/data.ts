import { PageProps } from '@/libs/@types';

import { MOVIE_CATEGORIES } from '@/libs/mock';
import { axiosClient, AxiosParamsProps } from '@/libs/fetcher';
import { createMovieItem } from '@/libs/factory';
import { getUserSession } from '@/libs/server-utils';

import { SearchIndexProps } from '@/components/pages/SearchIndex/index';

export const SearchData = async ({
    searchParams,
}: { uri?: string } & Pick<PageProps, 'searchParams'>): Promise<SearchIndexProps> => {
    const search = (await searchParams)?.q;
    const type = (await searchParams)?.type;
    const session = await getUserSession();
    let likes: undefined | string[] = undefined;

    let movieSearchParams: AxiosParamsProps[] = [];
    if (typeof search === 'string') {
        movieSearchParams = [...movieSearchParams, { key: 's', value: search }];
    }
    if (typeof type === 'string') {
        movieSearchParams = [...movieSearchParams, { key: 'type', value: type }];
    }

    if (session) {
        const { res } = await axiosClient({
            method: 'get',
            url: 'user',
            params: [{ key: 'username', value: session.value }],
        });

        if (res.status === 'success') {
            likes = res.data.user.likes;
        }
    }

    const { res } = await axiosClient({
        method: 'get',
        url: 'movies-entries',
        params: movieSearchParams,
    });

    const movies: SearchIndexProps['entries']['movies'] = [];
    if (res?.Search?.length > 0) {
        res.Search.forEach((item: any) => {
            movies.push(createMovieItem(item, likes));
        });
    }

    return {
        entries: {
            search: (search as string) ?? '',
            movies,
            categories: MOVIE_CATEGORIES,
        },
    };
};
