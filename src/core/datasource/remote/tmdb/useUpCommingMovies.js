import useSWR from "swr";
import { getUpcomingMovies } from "../../../../features/home/services/movies.services";


const useUpCommingMovies = () => {

    const {
        data: upcomingMovies,
        error: upcomingMoviesError,
        isLoading: upcomingMoviesIsLoading,
    } = useSWR("getUpcomingMovies", getUpcomingMovies);

    return { upcomingMovies, upcomingMoviesIsLoading };
}

export default useUpCommingMovies