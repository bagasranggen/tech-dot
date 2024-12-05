import { useContext } from 'react';

import { GlobalStateContext } from '@/store/Context/GlobalContext';
import { UserStateContext } from '@/store/Context/UserContext';

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useUserStateContext = () => useContext(UserStateContext);
