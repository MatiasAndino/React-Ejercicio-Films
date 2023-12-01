import useSWR from "swr";
import { getTopRatedMovies } from "../../../../features/home/services/movies.services";

const useTopRatedMovies = () => {

    const {
        data: topRatedMovies,
        error: topRatedMoviesError,
        isLoading: topRatedMoviesIsLoading,
    } = useSWR("getTopRatedMovies", getTopRatedMovies);

    return { topRatedMovies, topRatedMoviesIsLoading };
}

export default useTopRatedMovies