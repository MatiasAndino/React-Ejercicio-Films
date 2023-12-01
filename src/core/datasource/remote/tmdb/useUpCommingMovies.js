import useSWR from "swr";
import { getUpcomingMovies } from "../../../../features/home/services/movies.services";


const useUpCommingMovies = () => {

    const {
        data: UpcomingMovies,
        error: UpcomingMoviesError,
        isLoading: upcomingMoviesIsLoading,
    } = useSWR("getUpcomingMovies", getUpcomingMovies);

    return { UpcomingMovies, upcomingMoviesIsLoading };
}

export default useUpCommingMovies