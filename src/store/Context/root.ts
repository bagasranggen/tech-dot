import { useContext } from 'react';

import { GlobalStateContext } from '@/store/Context/GlobalContext';

export const useGlobalStateContext = () => useContext(GlobalStateContext);
