'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { useUserStateContext } from '@/store/Context';

import { useForm } from 'react-hook-form';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const AUTH_LOGIN_FIELD_NAME = {
    EMAIL: 'email',
    PASSWORD: 'password',
} as const;

export type AuthLoginFieldsFormProps = Record<
    (typeof AUTH_LOGIN_FIELD_NAME)[keyof typeof AUTH_LOGIN_FIELD_NAME],
    string
>;

export type LoginAuthProps = {};

const LoginAuth = ({}: LoginAuthProps): React.ReactElement => {
    const router = useRouter();
    const { userLoginHandler } = useUserStateContext();

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<AuthLoginFieldsFormProps>();

    const submitHandler = async (data: AuthLoginFieldsFormProps) => {
        console.log('submit', data);

        userLoginHandler({
            email: data.email,
            password: data.password,
            onSuccess: (username) => {
                router.push(`/profile/${username}`);
            },
        });
    };

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
