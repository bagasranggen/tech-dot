'use client';

import React, { forwardRef } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ ...rest }, ref) => {
    return (
        <NextLink
            ref={ref}
            suppressHydrationWarning={true}
            {...rest}
        />
    );
});

export default Link;
Link.displayName = 'Link';
