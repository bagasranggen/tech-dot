import React from 'react';

import { GlobalStateContextProvider } from '@/store/Context/GlobalContext';
import { UserStateContextProvider } from '@/store/Context/UserContext';

const ContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <GlobalStateContextProvider>
        <UserStateContextProvider>
        </UserStateContextProvider>
    </GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
