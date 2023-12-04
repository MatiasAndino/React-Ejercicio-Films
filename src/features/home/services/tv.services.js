import {
    tmdb_api,
    tmdb_paths,
  } from "../../../core/datasource/remote/tmdb/tmdb_api";
  import { tdmbMoviesTvAdapter } from "./adapters/tmdb.adapters";
  
  export const getPopularTv = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.tv.popular);
  
    return tdmbMoviesTvAdapter(data);
  };
  
  export const getTopRatedTv = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.tv.top_rated);
  
    return tdmbMoviesTvAdapter(data);
  };
  
  export const getAiringTv = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.tv.airing_today);
  
    return tdmbMoviesTvAdapter(data);
  };
