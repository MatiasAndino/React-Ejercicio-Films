import useSWR from "swr";
import { getAiringTv } from "../../../../features/home/services/tv.services";

const useAiringTvs = () => {

    const {
        data: airingTv,
        error: airingTvError,
        isLoading: airingTvIsLoading,
    } = useSWR("getAiringTv", getAiringTv);

    return { airingTv, airingTvIsLoading };
}

export default useAiringTvs;