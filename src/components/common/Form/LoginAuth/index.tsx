'use client';

import React from 'react';

import { useUserStateContext } from '@/store/Context';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next-nprogress-bar';

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
            <Input.Rounded
                type="email"
                placeholder="Email"
                className="text-center"
                hook={{
                    register,
                    name: AUTH_LOGIN_FIELD_NAME.EMAIL,
                    required: true,
                }}
            />

            <Input.Rounded
                type="password"
                placeholder="Password"
                className="mt-1 text-center"
                hook={{
                    register,
                    name: AUTH_LOGIN_FIELD_NAME.PASSWORD,
                    required: true,
                }}
            />

            <Button.Container
                className="mt-4 d-flex justify-content-center"
                buttons={[
                    {
                        children: (
                            <Button.Main
                                as="button"
                                variant="rounded"
                                color="primary"
                                type="submit">
                                Submit
                            </Button.Main>
                        ),
                    },
                ]}
            />
        </form>
    );
};

export default LoginAuth;
