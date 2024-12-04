export const createMockToken = () => {
    const random = () => Math.random().toString(36).substring(2);

    return random() + random();
};
