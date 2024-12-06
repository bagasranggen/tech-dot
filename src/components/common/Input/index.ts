import { RefComponent } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Input/Base';
import Rounded, { RoundedProps } from '@/components/common/Input/Rounded';

export type * from '@/components/common/Input/Base';
export type * from '@/components/common/Input/Rounded';

type InputComposition = {
    Rounded: RefComponent<RoundedProps, HTMLInputElement>;
};

export default Object.assign<RefComponent<BaseProps, HTMLInputElement>, InputComposition>(Base, { Rounded });
