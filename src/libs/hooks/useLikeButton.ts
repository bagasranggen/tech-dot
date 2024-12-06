import { useRouter } from 'next-nprogress-bar';

import { useMovieStateContext, useUserStateContext } from '@/store/Context';

export const useLikeButton = () => {
    const router = useRouter();
    const { user } = useUserStateContext();
    const { moviesLikeId, setMoviesLikeId } = useMovieStateContext();

    const likeClickButtonHandler = (id: string) => {
        const isAlreadyLiked = moviesLikeId.includes(id);

        // Handle if user not logged in
        if (!user) {
            router.push('/profile');
        }

        // Handle like event
        if (user && !isAlreadyLiked) {
            setMoviesLikeId((prevState) => [...prevState, id]);
        }

        // Handle unlike event
        if (user && isAlreadyLiked) {
            setMoviesLikeId((prevState) => prevState.filter((item: string) => item !== id));
        }
    };

    return { likeClickButtonHandler };
};
