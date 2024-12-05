export type UserProps = {
    likes: string[];
} & Record<'email' | 'password' | 'username' | 'name', string>;

export const USERS: UserProps[] = [
    {
        username: 'example',
        name: 'Example User',
        email: 'example@example.com',
        password: '123456',
        likes: ['tt0232500', 'tt7991608'],
    },
];
