'use client';

import React from 'react';

import { useMovieStateContext } from '@/store/Context';
import { useLikeButton } from '@/libs/hooks';

import Card from '@/components/common/Card';

export type ProfileLikesIndexProps = {};

const ProfileLikesIndex = ({}: ProfileLikesIndexProps): React.ReactElement => {
    const { moviesLike } = useMovieStateContext();
    const { likeClickButtonHandler } = useLikeButton();

    return (
        <>
            {moviesLike && (
                <Card.Thumbnail
                    className="gy-5 row-cols-3"
                    likeButton={{
                        onClick: likeClickButtonHandler,
                    }}
                    items={moviesLike}
                />
            )}
        </>
    );
};

export default ProfileLikesIndex;
