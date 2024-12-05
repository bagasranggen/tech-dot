import { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const useQueryString = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    return { pathname, createQueryString };
};
