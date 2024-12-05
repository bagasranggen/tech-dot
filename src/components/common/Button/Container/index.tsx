import React, { Fragment, PropsWithChildren } from 'react';

import { ArrayString, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ContainerItemProps = PropsWithChildren;

export type ContainerProps = {
    buttons: ContainerItemProps[];
} & PropsClassname;

const Container = ({ className, buttons }: ContainerProps): React.ReactElement => {
    let containerClass: ArrayString = ['btn-container'];
    if (className) containerClass.push(className);
    containerClass = joinArrayString(containerClass);

    return (
        <div className={containerClass}>
            {buttons.map((item: ContainerItemProps, i: number) => {
                return <Fragment key={i}>{item.children}</Fragment>;
            })}
        </div>
    );
};

export default Container;
