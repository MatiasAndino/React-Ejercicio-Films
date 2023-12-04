import useSWR from "swr";
import { getTopRatedTv } from "../../../../features/home/services/tv.services";

const useTopRatedTvs = () => {

    const {
        data: topRatedTv,
        error: topRatedTvError,
        isLoading: topRatedTvIsLoading,
    } = useSWR("getTopRatedTv", getTopRatedTv);

    return { topRatedTv, topRatedTvIsLoading };
}

export default useTopRatedTvs;