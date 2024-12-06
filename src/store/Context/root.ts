import { useContext } from 'react';

import { GlobalStateContext } from '@/store/Context/GlobalContext';
import { MovieStateContext } from '@/store/Context/MovieContext';
import { UserStateContext } from '@/store/Context/UserContext';

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useMovieStateContext = () => useContext(MovieStateContext);
export const useUserStateContext = () => useContext(UserStateContext);
