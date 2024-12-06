'use client';

import React, { createContext, useEffect, useState } from 'react';

export type GlobalState = {
    isDev: boolean;
    isFirstLoad: boolean;
};

export const GlobalStateContext = createContext<GlobalState>({
    isDev: true,
    isFirstLoad: true,
});

export const GlobalStateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const isDev = process.env.NODE_ENV === 'development';

    const [isFirstLoad, setIsFirstLoad] = useState<GlobalState['isFirstLoad']>(true);

    useEffect(() => {
        setIsFirstLoad(false);
    }, []);

    const defaultContext = { isDev, isFirstLoad };

    return <GlobalStateContext.Provider value={defaultContext}>{children}</GlobalStateContext.Provider>;
};
