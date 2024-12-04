import { axiosClient } from '@/libs/fetcher';
import { PageProps } from '@/libs/@types';

export const SearchData = async ({ searchParams }: { uri: string } & Pick<PageProps, 'searchParams'>) => {
    // const { res } = await axiosClient({
    //     method: 'get',
    //     url: 'movies-entries',
    //     params: [{ key: 's', value: searchParams.q  }],
    // });

    // const {} = await axiosClient({method:'get', url:})

    console.log(searchParams);

    return {
        entries: {},
    };
};
