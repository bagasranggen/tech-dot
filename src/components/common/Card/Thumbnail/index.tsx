import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Base, { BaseProps } from '@/components/common/Card/Base';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Picture, { BaseItemProps } from '@/components/common/Picture';

export type ThumbnailItemProps = {
    media: BaseItemProps[];
    title: string;
} & Pick<BaseAnchorProps, 'href'>;

export type ThumbnailProps = {
    items: ThumbnailItemProps[];
} & Omit<BaseProps, 'items'>;

const Thumbnail = ({ items, ...props }: ThumbnailProps): React.ReactElement => {
    return (
        <Base
            {...props}
            items={items.map((item: ThumbnailItemProps) => ({
                children: (
                    <div className="card-thumbnail">
                        <Button
                            as="button"
                            className="btn p-0 card-thumbnail__icon">
                            <FontAwesomeIcon
                                icon={faHeart}
                                size="2x"
                            />
                        </Button>
                        <Button
                            as="link"
                            href={item.href}>
                            <div className="">
                                <Picture
                                    className="d-block oly--30"
                                    items={item.media}
                                />
                                <h4 className="card-thumbnail__title">{item.title}</h4>
                            </div>
                        </Button>
                    </div>
                ),
            }))}
        />
    );
};

export default Thumbnail;
