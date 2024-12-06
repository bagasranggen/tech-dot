import React from 'react';

import Base, { BaseProps } from '@/components/common/Card/Base';
import ThumbnailItem, { ThumbnailItemProps } from '@/components/common/Card/Thumbnail/ThumbnailItem';

export type ThumbnailProps = {
    items: Omit<ThumbnailItemProps, 'likeButton'>[];
} & (Omit<BaseProps, 'items'> & Pick<ThumbnailItemProps, 'likeButton'>);

const Thumbnail = ({ items, likeButton, ...props }: ThumbnailProps): React.ReactElement => {
    return (
        <Base
            {...props}
            items={items.map((item: Omit<ThumbnailItemProps, 'likeButton'>) => {
                return {
                    children: (
                        <ThumbnailItem
                            likeButton={likeButton}
                            {...item}
                        />
                    ),
                };
            })}
        />
    );
};

export default Thumbnail;

export type * from './ThumbnailItem';
