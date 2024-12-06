'use client';

import React, { useEffect } from 'react';

import { useMovieStateContext } from '@/store/Context';

import Card from '@/components/common/Card';

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

    return (
        <>
            {moviesLike && (
                <Card.Thumbnail
                    className="gy-5 row-cols-3"
                    items={moviesLike}
                />
            )}
        </>
    );
};

export default ProfileLikesIndex;
