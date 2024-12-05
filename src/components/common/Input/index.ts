import { RefComponent } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Input/Base';

export type * from '@/components/common/Input/Base';

type InputComposition = {};

export default Object.assign<RefComponent<BaseProps, HTMLInputElement>, InputComposition>(Base, {});
