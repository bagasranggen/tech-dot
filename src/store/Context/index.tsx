import React from 'react';

import { GlobalStateContextProvider } from '@/store/Context/GlobalContext';
import { UserStateContextProvider } from '@/store/Context/UserContext';
import { MovieStateContextProvider } from '@/store/Context/MovieContext';

const ContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <GlobalStateContextProvider>
        <UserStateContextProvider>
            <MovieStateContextProvider>{children}</MovieStateContextProvider>
        </UserStateContextProvider>
    </GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
