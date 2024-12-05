'use client';

import React, { createContext, useEffect, useState } from 'react';

import { useUserStateContext } from '@/store/Context/root';
import { UserProps } from '@/libs/mock';
import { axiosClient } from '@/libs/fetcher';

export type MovieState = {
    moviesLike: any[] | undefined;
    moviesLikeId: string[];
    setMoviesLikeId: React.Dispatch<React.SetStateAction<MovieState['moviesLikeId']>>;
};

export const MovieStateContext = createContext<MovieState>({
    moviesLike: undefined,
    moviesLikeId: [],
    setMoviesLikeId: () => {},
});

export const MovieStateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUserStateContext();

    const [moviesLike, setMoviesLike] = useState<MovieState['moviesLike']>(undefined);
    const [moviesLikeId, setMoviesLikeId] = useState<MovieState['moviesLikeId']>(user?.likes ?? []);

    const getUserMovieLikes = async ({ likes }: Pick<UserProps, 'likes'>) => {
        const tmp: any[] = [];

        await Promise.all(
            likes.map(async (item: any) => {
                const { res } = await axiosClient({
                    method: 'get',
                    url: 'movies-entries',
                    params: [{ key: 'i', value: item }],
                });

                if (res.Response.toLowerCase() === 'true') {
                    tmp.push(res);
                }
            })
        );

        setMoviesLike(tmp);
    };

    useEffect(() => {
        if (!user) {
            setMoviesLike(undefined);
        }

        if (user && user.likes.length > 0) {
            setMoviesLikeId(user.likes);
        }
    }, [user]);

    useEffect(() => {
        if (moviesLikeId.length > 0) {
            getUserMovieLikes({ likes: moviesLikeId });
        }
    }, [moviesLikeId]);

    const defaultContext = { moviesLike, moviesLikeId, setMoviesLikeId };

    return <MovieStateContext.Provider value={defaultContext}>{children}</MovieStateContext.Provider>;
};
