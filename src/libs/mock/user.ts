export type UserProps = {
    likes: string[];
} & Record<'email' | 'password' | 'username', string>;

export const USERS: UserProps[] = [
    {
        username: 'example',
        email: 'example@example.com',
        password: '123456',
        likes: ['tt0232500', 'tt7991608'],
    },
];
