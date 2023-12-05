import { tmdb_paths } from "../../../../core/datasource/remote/tmdb/tmdb_api";

export const tdmbMoviesTvAdapter = (response) => {
  const { results } = response;

  console.log(results)
  
  return results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    poster: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.original}${item.backdrop_path}`,
    backdrop: `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.w1280}${item.backdrop_path}`,
    logos: `${tmdb_paths.images.logos.url}${tmdb_paths.images.logos.sizes.original}${item.logos_path}`,
    description: item.overview,
    genreIds: item.genre_ids,
    rating: item.vote_average,
    video: item.video,
    date: item.first_air_date, 

  }));
};
