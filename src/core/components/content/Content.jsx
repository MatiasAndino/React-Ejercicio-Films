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

            {!topRatedMoviesIsLoading && <ContenedorCarousel title={'Top Rated Movies'} data={topRatedMovies} mediaType={'movie'}/>}
            {!popularMoviesIsLoading && <ContenedorCarousel title={'Popular Movies'} data={popularMovies}  mediaType={'movie'} />}
            {!popularTvIsLoading && <ContenedorCarousel title={'Popular Tv'} data={popularTv}  mediaType={'tv'} />}
            {!topRatedTvIsLoading && <ContenedorCarousel title={'Top Rated Tv'} data={topRatedTv}  mediaType={'tv'} />}
            {!airingTvIsLoading && <ContenedorCarousel title={'Airing Tv'} data={airingTv}  mediaType={'tv'} />}
                <Modal>
                    <Modal.Body />
                </Modal>
            <div className='vw-25 vh-100 fs-1 bg-dark text-center'>
                {/* RELLENO */}

            </div>

        </ContentModalProvider>

    )
}

export default Content
// {/* <Modal.BannerModal parent='Banner' movie={''} /> */}