import { RefComponent, Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Button/Base';
import Container, { ContainerProps } from '@/components/common/Button/Container';
import Main, { MainProps } from '@/components/common/Button/Main';

export type * from '@/components/common/Button/Base';
export type * from '@/components/common/Button/Container';
export type * from '@/components/common/Button/Main';

type ButtonComposition = {
    Container: Component<ContainerProps>;
    Main: RefComponent<MainProps, HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>;
};

export default Object.assign<
    RefComponent<BaseProps, HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>,
    ButtonComposition
>(Base, { Container, Main });
