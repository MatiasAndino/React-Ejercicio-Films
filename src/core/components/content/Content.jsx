import React from 'react'
import { ContentModalProvider } from '../context/ContentContext'

import Banner_ from '../Banner/Banner_'
import useTopRatedMovies from '../../datasource/remote/tmdb/useTopRatedMovies'
import ContenedorCarousel from '../Banner/contenedor_carousel/ContenedorCarousel'
import usePopularMovies from '../../datasource/remote/tmdb/usePopularMovies'
import usePopularTvs from '../../datasource/remote/tmdb/usePopularTvs'
import useTopRatedTvs from '../../datasource/remote/tmdb/useTopRatedTvs'
import useAiringTvs from '../../datasource/remote/tmdb/useAiringTvs'
import Navbar from '../navbar/Navbar'
import Modal from '../modal/Modal'


const ORIGEN = 'HomeView';

const Content = () => {
    const { topRatedMovies, topRatedMoviesIsLoading } = useTopRatedMovies();
    const { popularMovies, popularMoviesIsLoading } = usePopularMovies();
    
    const { popularTv, popularTvIsLoading } = usePopularTvs();
    const { topRatedTv, topRatedTvIsLoading } = useTopRatedTvs();
    const { airingTv, airingTvIsLoading } = useAiringTvs();

    return (

        <ContentModalProvider>

            <Navbar />
            <Banner_ origen={ORIGEN} />

            {!topRatedMoviesIsLoading && <ContenedorCarousel title={'Top Rated Movies'} data={topRatedMovies}/>}
            {!popularMoviesIsLoading && <ContenedorCarousel title={'Popular Movies'} data={popularMovies} />}
            {!popularTvIsLoading && <ContenedorCarousel title={'Popular Tv'} data={popularTv} />}
            {!topRatedTvIsLoading && <ContenedorCarousel title={'Top Rated Tv'} data={topRatedTv} />}
            {!airingTvIsLoading && <ContenedorCarousel title={'Airing Tv'} data={airingTv} />}
                <Modal>
                    <Modal.Body />
                </Modal>
            <div className='vw-25 h-100 fs-1 bg-dark text-center'>
                {/* RELLENO */}

            </div>

        </ContentModalProvider>

    )
}

export default Content
// {/* <Modal.BannerModal parent='Banner' movie={''} /> */}