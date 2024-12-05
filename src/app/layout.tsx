import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import ContextProvider from '@/store/Context';

import '@fontsource/roboto';

import '@/assets/styles/styles/scss/bootstrap.scss';
import '@/assets/styles/styles/scss/main.scss';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body>
                <ContextProvider>{children}</ContextProvider>
            </body>
        </html>
    );
}
