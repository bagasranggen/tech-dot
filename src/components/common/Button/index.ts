import { RefComponent } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Button/Base';

export type * from '@/components/common/Button/Base';

type ButtonComposition = {};

export default Object.assign<
    RefComponent<BaseProps, HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>,
    ButtonComposition
>(Base, {});
