import { Component } from '@/libs/@types';

import LoginAuth, { LoginAuthProps } from '@/components/common/Form/LoginAuth';
import Search, { SearchProps } from '@/components/common/Form/Search';

type FormComposition = {
    LoginAuth: Component<LoginAuthProps>;
    Search: Component<SearchProps>;
};

export default Object.assign<{}, FormComposition>({}, { LoginAuth, Search });
