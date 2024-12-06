import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Picture, { BaseItemProps } from '@/components/common/Picture';
import Button, { BaseAnchorProps } from '@/components/common/Button';

export type ThumbnailItemProps = {
    id: string;
    media: BaseItemProps[];
    title: string;
    isLiked?: boolean;
    likeButton?: {
        onClick: (id: string) => void;
    };
} & Pick<BaseAnchorProps, 'href'>;

const ThumbnailItem = ({ id, media, title, href, isLiked, likeButton }: ThumbnailItemProps): React.ReactElement => {
    let iconClass: ArrayString = ['btn p-0 card-thumbnail__icon'];
    if (isLiked) iconClass.push('card-thumbnail__icon--active');
    iconClass = joinArrayString(iconClass);

    return (
        <div className="card-thumbnail">
            <Button
                as="button"
                type="button"
                className={iconClass}
                onClick={() => {
                    likeButton?.onClick(id);
                }}>
                <FontAwesomeIcon
                    icon={faHeart}
                    size="2x"
                />
            </Button>
            <Button
                as="link"
                href={href}>
                <div className="">
                    <Picture
                        className="d-block oly--30"
                        items={media}
                    />
                    <h4 className="card-thumbnail__title">{title}</h4>
                </div>
            </Button>
        </div>
    );
};

export default ThumbnailItem;
