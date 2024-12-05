'use client';

import React, { useEffect } from 'react';
import { useMovieStateContext } from '@/store/Context';

export type ProfileLikesIndexProps = {};

const ProfileLikesIndex = ({}: ProfileLikesIndexProps): React.ReactElement => {
    const { moviesLike } = useMovieStateContext();

    useEffect(() => {
        console.log(moviesLike);
    }, [moviesLike]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setMoviesLikeId((prevState) =>
    //             !prevState.includes('tt1821694') ? [...prevState, 'tt1821694'] : prevState
    //         );
    //     }, 3000);
    // }, [moviesLikeId]);

    return <>LIKES</>;
};

export default ProfileLikesIndex;
