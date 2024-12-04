export type ObjectProps<Props> = { [key: string]: Props };

export type PageProps = {
    params: Promise<ObjectProps<any>>;
    searchParams: Promise<ObjectProps<string | string[] | undefined>>;
};
