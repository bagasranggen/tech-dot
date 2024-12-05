import React from 'react';

import { GlobalStateContextProvider } from '@/store/Context/GlobalContext';

const ContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <GlobalStateContextProvider>{children}</GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
