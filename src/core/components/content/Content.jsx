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
import { FavoriteProvider } from '../../providers/FavoritesProvider'
import useScreenWidth from '../../screen/useScreenWidth'
import ContenedorCarruselFavoritos from '../contenedor_carrusel_favoritos/ContenedorCarruselFavoritos'


const ORIGEN = 'HomeView';

const Content = () => {
    const { topRatedMovies, topRatedMoviesIsLoading } = useTopRatedMovies();
    const { popularMovies, popularMoviesIsLoading } = usePopularMovies();

    const { popularTv, popularTvIsLoading } = usePopularTvs();
    const { topRatedTv, topRatedTvIsLoading } = useTopRatedTvs();
    const { airingTv, airingTvIsLoading } = useAiringTvs();

    const { items, style } = useScreenWidth();


    return (

        <ContentModalProvider>
            <FavoriteProvider>

                <Navbar />
                <Banner_ origen={ORIGEN} items={items} style={style} />
                <ContenedorCarruselFavoritos items={items} style={style} />
                {!topRatedMoviesIsLoading && <ContenedorCarousel title={'Top Rated Movies'} data={topRatedMovies} items={items} style={style} />}
                {!popularMoviesIsLoading && <ContenedorCarousel title={'Popular Movies'} data={popularMovies} items={items} style={style} />}
                {!popularTvIsLoading && <ContenedorCarousel title={'Popular Tv'} data={popularTv} items={items} style={style} />}
                {!topRatedTvIsLoading && <ContenedorCarousel title={'Top Rated Tv'} data={topRatedTv} items={items} style={style} />}
                {!airingTvIsLoading && <ContenedorCarousel title={'Airing Tv'} data={airingTv} items={items} style={style} />}
                <Modal />
                <div className='vw-25 h-100 fs-1 bg-dark text-center'>
                    {/* RELLENO */}

                </div>
            </FavoriteProvider>

        </ContentModalProvider>

    )
}

export default Content
// {/* <Modal.BannerModal parent='Banner' movie={''} /> */}