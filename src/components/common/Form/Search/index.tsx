'use client';

import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next-nprogress-bar';

import Input from '@/components/common/Input';

const SEARCH_FIELD_NAME = {
    SEARCH: 'search',
} as const;

export type SearchFieldsFormProps = Record<(typeof SEARCH_FIELD_NAME)[keyof typeof SEARCH_FIELD_NAME], string>;

export type SearchProps = {
    query?: string;
};

const Search = ({ query }: SearchProps): React.ReactElement => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<SearchFieldsFormProps>();

    const submitHandler = ({ search }: SearchFieldsFormProps) => {
        if (!search) return;

        router.push(`/search?q=${search}`);
    };

    useEffect(() => {
        if (!query) return;

        setValue(SEARCH_FIELD_NAME.SEARCH, query);
    }, [query, setValue]);

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Input.Rounded
                type="search"
                placeholder="Search movies..."
                size="lg"
                className="text-center"
                error={errors?.[SEARCH_FIELD_NAME.SEARCH]?.message}
                hook={{
                    register,
                    name: SEARCH_FIELD_NAME.SEARCH,
                    required: true,
                }}
            />
        </form>
    );
};

export default Search;
