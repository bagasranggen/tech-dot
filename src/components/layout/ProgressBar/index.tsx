'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';

import { AppProgressBar, startProgress } from 'next-nprogress-bar';

export type ProgressBarProps = PropsWithChildren;

const ProgressBar = ({ children }: ProgressBarProps): React.ReactElement => {
    const [firstLoad, setFirstLoad] = useState<boolean>(true);

    let css: string | undefined = undefined;
    if (firstLoad) {
        css = `#nprogress .bar {background: none !important;} #nprogress .peg {box-shadow: none !important;} #nprogress .spinner {display: none !important;}`;
    }

    useEffect(() => {
        startProgress();
        setTimeout(() => setFirstLoad(false), 400);
    }, []);

    return (
        <>
            {children}
            {css ? <style>{css}</style> : null}
            <AppProgressBar
                height="4px"
                color="#e38e49"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default ProgressBar;
