import React, { forwardRef } from 'react';

import Base, { BaseProps } from '@/components/common/Button';
import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type MainProps = {
    variant?: 'rounded';
    color?: 'primary' | 'secondary';
} & BaseProps;

const Main = forwardRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement, MainProps>(
    ({ className, variant, color, ...props }, ref) => {
        let btnClass: ArrayString = ['btn'];
        if (variant) btnClass.push(`btn--${variant}`);
        if (color) btnClass.push(`btn--${color}`);
        if (className) btnClass.push(className);
        btnClass = joinArrayString(btnClass);

        return (
            <Base
                ref={ref}
                className={btnClass}
                {...props}
            />
        );
    }
);

Main.displayName = 'Main';
export default Main;
