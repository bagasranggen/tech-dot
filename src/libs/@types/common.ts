import React from 'react';

export type ObjectProps<Props> = { [key: string]: Props };

export type PageProps = {
    params: Promise<ObjectProps<any>>;
    searchParams?: Promise<ObjectProps<string | string[] | undefined>>;
};

export type PropsClassname = { className?: string };

export type ArrayString = string[] | string;

export type Component<Props> = { (props: Props): React.ReactElement | null };

export type RefComponent<Props, Element> = React.ForwardRefExoticComponent<Props & React.RefAttributes<Element>>;
