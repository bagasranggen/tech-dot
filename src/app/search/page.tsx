import React from 'react';

import { PageProps } from '@/libs/@types';
import { axiosClient } from '@/libs/fetcher';
import { SearchData } from '@/components/pages/SearchIndex/data';

const Page = async ({ searchParams }: PageProps): Promise<React.ReactElement> => {
    const search = (await searchParams)?.q;

    // const {} = SearchData({ searchParams: searchParams });

    // console.log(searchParams);

    // const {res} = await axiosClient({ method: 'get', url: 'next-api', params:[{
    // q: searchParams
    // }] });

    // const { res } = await axiosClient({
    //     method: 'get',
    //     url: 'movies-entries',
    //     params: [{ key: 's', value: search as string }],
    // });
    //
    // console.log(res);

    return <h1>Search: {search}</h1>;
};

export default Page;
