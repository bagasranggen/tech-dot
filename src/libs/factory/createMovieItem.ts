export const createMovieItem = (item: any, likes?: string[]) => {
    const id = item.imdbID;

    let isLiked = false;
    if (likes && likes.includes(id)) isLiked = true;

    return {
        isLiked,
        id,
        href: `/movie/${id}`,
        media: [{ src: item.Poster, alt: item.Title, className: 'w-100' }],
        title: item.Title,
    };
};
