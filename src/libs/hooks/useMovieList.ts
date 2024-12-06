import { useEffect, useState } from 'react';

import { useGlobalStateContext } from '@/store/Context';

import { ThumbnailProps, ThumbnailItemProps } from '@/components/common/Card';

export const useMovieList = ({
    movies: initMovies,
    likes,
}: {
    movies: Omit<ThumbnailItemProps, 'likeButton'>[];
    likes?: string[];
}) => {
    const { isFirstLoad } = useGlobalStateContext();
    const [movies, setMovies] = useState<ThumbnailProps['items']>(initMovies);

    useEffect(() => {
        setMovies(initMovies);
    }, [initMovies]);

    useEffect(() => {
        if (!likes) return;
        if (isFirstLoad) return;

        const tmp = initMovies.map((item) => ({
            ...item,
            isLiked: likes.includes(item.id),
        }));

        setMovies(tmp);
    }, [likes, isFirstLoad, initMovies]);

    return { movies };
};
