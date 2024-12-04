import React from 'react';

import { axiosClient } from '@/libs/fetcher';

import HomepageIndex from '@/components/pages/HomepageIndex';

const Page = async (): Promise<React.ReactElement> => {
    const { res } = await axiosClient({
        method: 'get',
        url: 'movies-entries',
        params: [{ key: 's', value: 'red' }],
    });

    console.log('server', res);

    return <HomepageIndex />;
};

export default Page;
