import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';
import Carrusel from '../../../core/carrusel/Carrusel';

import {
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
} from "../services/movies.services";

import useSWR from 'swr';
import Banner from '../../../core/banner/Banner';
import usePopularMovies from '../../../core/datasource/remote/tmdb/usePopularMovies';

const HomeView = () => {

    const { logout } = useAuth();



    // const {
    //     data: popularMovies,
    //     error: popularMoviesError,
    //     isLoading: popularMoviesIsLoading,
    // } = useSWR("getPopularMovies", getPopularMovies);

    // const {
    //     data: upComingMovies,
    //     error: upComingMoviesError,
    //     isLoading: tupComingMoviesIsLoading,
    // } = useSWR("getUpcomingMovies", getUpcomingMovies);

    const {popularMovies, popularMoviesIsLoading}  = usePopularMovies();

    return (
        <div className='bg-dark'>

            {/* <h1>HOME VIEW</h1>
            <button className='btn btn-outline-danger' onClick={logout}>CERRAR SESIÓN</button>
 */}

            <Banner parent='HomeView' />

            {!popularMoviesIsLoading && <Carrusel data={popularMovies} titulo='Popular Movies' isLoading={popularMoviesIsLoading}/>}

        </div>
    )
}

export default HomeView;