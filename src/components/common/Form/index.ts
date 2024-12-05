import { Component } from '@/libs/@types';

import LoginAuth, { LoginAuthProps } from '@/components/common/Form/LoginAuth';

type FormComposition = {
    LoginAuth: Component<LoginAuthProps>;
};

export default Object.assign<{}, FormComposition>({}, { LoginAuth });
