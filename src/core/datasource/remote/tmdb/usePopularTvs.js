import useSWR from "swr";
import { getPopularTv } from "../../../../features/home/services/tv.services";

const usePopularTvs = () => {

    const {
        data: popularTv,
        error: popularTvError,
        isLoading: popularTvIsLoading,
    } = useSWR("getPopularTv", getPopularTv);

    return { popularTv, popularTvIsLoading };
}

export default usePopularTvs;