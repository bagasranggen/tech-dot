export type UserProps = {} & Record<'email' | 'password' | 'username', string>;

export const USERS: UserProps[] = [
    {
        username: 'example',
        email: 'example@example.com',
        password: '123456',
    },
];
