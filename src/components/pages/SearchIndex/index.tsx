'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { MOVIE_CATEGORIES } from '@/libs/mock';
import { useQueryString } from '@/libs/hooks';

import Button from '@/components/common/Button';

export type SearchIndexProps = {
    entries: {
        search?: string;
        movies?: any[];
    };
};

const SearchIndex = ({ entries }: SearchIndexProps): React.ReactElement => {
    const router = useRouter();
    const { pathname, createQueryString } = useQueryString();

    return (
        <>
            <h1>Search: {entries.search}</h1>

            <ul>
                {MOVIE_CATEGORIES.map((item, i: number) => (
                    <li key={i}>
                        <Button
                            as="button"
                            type="button"
                            onClick={() => {
                                router.push(`${pathname}?${createQueryString('type', item.handle)}`);
                            }}>
                            {item.label}
                        </Button>
                    </li>
                ))}
            </ul>

            <ul>{entries.movies?.map((item, i: number) => <li key={i}>{item.Title}</li>)}</ul>
            {(!entries?.movies || entries?.movies?.length === 0) && 'empty'}
        </>
    );
};

export default SearchIndex;
