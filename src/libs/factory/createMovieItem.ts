export const createMovieItem = (item: any) => {
    return {
        href: `/movie/${item.imdbID}`,
        media: [{ src: item.Poster, alt: item.Title }],
        title: item.Title,
    };
};
