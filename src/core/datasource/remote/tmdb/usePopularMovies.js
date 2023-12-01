import useSWR from "swr";
import { getPopularMovies } from "../../../../features/home/services/movies.services";

const usePopularMovies = () => {

    const {
        data: popularMovies,
        error: popularMoviesError,
        isLoading: popularMoviesIsLoading,
    } = useSWR("getPopularMovies", getPopularMovies);

    return { popularMovies, popularMoviesIsLoading };
}

export default usePopularMovies