import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import ContextProvider from '@/store/Context';

import '@fontsource/roboto';

import '@/assets/styles/styles/scss/bootstrap.scss';
import '@/assets/styles/styles/scss/main.scss';

import ProgressBar from '@/components/layout/ProgressBar';

export const metadata: Metadata = {
    title: {
        template: '%s | Find Your Movies',
        default: 'Find Your Movies',
    },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body>
                <ContextProvider>
                    <ProgressBar>{children}</ProgressBar>
                </ContextProvider>
            </body>
        </html>
    );
}
