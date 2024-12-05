'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { axiosClient } from '@/libs/fetcher';

import { useForm } from 'react-hook-form';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const AUTH_LOGIN_FIELD_NAME = {
    EMAIL: 'email',
    PASSWORD: 'password',
};

export type AuthLoginFieldsFormProps = Record<
    (typeof AUTH_LOGIN_FIELD_NAME)[keyof typeof AUTH_LOGIN_FIELD_NAME],
    string
>;

export type LoginAuthProps = {};

const LoginAuth = ({}: LoginAuthProps): React.ReactElement => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthLoginFieldsFormProps>();

    const submitHandler = async (data: AuthLoginFieldsFormProps) => {
        console.log('submit', data);

        const { res } = await axiosClient({
            method: 'get',
            url: 'auth/login',
            params: [
                {
                    key: 'email',
                    value: data.email,
                },
                {
                    key: 'password',
                    value: data.password,
                },
            ],
        });

        console.log(res);

        if (res.status === 'success') {
            router.push(`/profile/${res.data.username}`);
        }
    };

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Input
                type="email"
                placeholder="email"
                hook={{
                    register,
                    name: AUTH_LOGIN_FIELD_NAME.EMAIL,
                    // required: true,
                }}
            />

            <Input
                type="password"
                placeholder="Password"
                hook={{
                    register,
                    name: AUTH_LOGIN_FIELD_NAME.PASSWORD,
                }}
            />

            <Button
                as="button"
                type="submit">
                submit
            </Button>
        </form>
    );
};

export default LoginAuth;
