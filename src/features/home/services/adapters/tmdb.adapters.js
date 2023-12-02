import { tmdb_paths } from "../../../../core/datasource/remote/tmdb/tmdb_api";

export const tdmbMoviesTvAdapter = (response) => {
  const { results } = response;

  return results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    poster: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.original}${item.backdrop_path}`,
    backdrop: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.w1280}${item.backdrop_path}`,
    logos: `${tmdb_paths.images.logos.url}${tmdb_paths.images.logos.sizes.original}${item.logos_path}`,
    description: item.overview,
    rating: item.vote_average,
    video: item.video,

  }));
};
