'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const SEARCH_FIELD_NAME = {
    SEARCH: 'search',
} as const;

export type SearchFieldsFormProps = Record<(typeof SEARCH_FIELD_NAME)[keyof typeof SEARCH_FIELD_NAME], string>;

export type SearchProps = {};

const Search = ({}: SearchProps): React.ReactElement => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SearchFieldsFormProps>();

    const submitHandler = ({ search }: SearchFieldsFormProps) => {
        if (!search) return;

        router.push(`/search?q=${search}`);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Input
                type="search"
                placeholder="Search..."
                hook={{
                    register,
                    name: SEARCH_FIELD_NAME.SEARCH,
                    required: true,
                }}
            />
            {errors[SEARCH_FIELD_NAME.SEARCH] && errors[SEARCH_FIELD_NAME.SEARCH]?.message}

            <Button
                as="button"
                type="submit">
                Search
            </Button>
        </form>
    );
};

export default Search;
