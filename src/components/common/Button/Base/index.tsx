'use client';

import React, { forwardRef } from 'react';
import { PropsClassname } from '@/libs/@types';
import Link, { LinkProps } from '@/components/common/Link';

export type BaseAnchorProps = { as?: 'link' } & LinkProps;

export type BaseButtonProps = { as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseCommonProps = PropsClassname;

export type BaseProps = BaseCommonProps & (BaseAnchorProps | BaseButtonProps);

const Base = forwardRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement, BaseProps>(
    (props, ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>) => {
        if (props.as === 'button') {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { as, children, ...rest } = props;

            return (
                <button
                    ref={ref as React.ForwardedRef<HTMLButtonElement>}
                    {...rest}>
                    {children}
                </button>
            );
        }

        // Render Link
        if (props.as === 'link') {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { as, ...rest } = props;

            return (
                <Link
                    ref={ref as React.ForwardedRef<HTMLAnchorElement>}
                    {...rest}>
                    {props.children}
                </Link>
            );
        }

        return (
            <div
                ref={ref as React.ForwardedRef<HTMLDivElement>}
                {...(props as React.HTMLAttributes<HTMLDivElement>)}>
                {props.children}
            </div>
        );
    }
);

Base.displayName = 'Base';
export default Base;
