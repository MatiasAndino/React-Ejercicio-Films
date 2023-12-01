import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';
import Carrusel from '../../../core/carrusel/Carrusel';

import {
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
  } from "../services/movies.services";

import useSWR from 'swr';

const HomeView = () => {

    const { logout } = useAuth();



    const {
        data: popularMovies,
        error: popularMoviesError,
        isLoading: popularMoviesIsLoading,
      } = useSWR("getPopularMovies", getPopularMovies);
    
      const {
        data: upComingMovies,
        error: topRatedMoviesError,
        isLoading: topRatedMoviesIsLoading,
      } = useSWR("getTopRatedMovies", getUpcomingMovies);
      
      
      console.log()

    return (
        <div className='bg-dark'>

            <h1>HOME VIEW</h1>
            <button className='btn btn-outline-danger' onClick={logout}>CERRAR SESIÓN</button>



            <Carrusel data={ popularMovies } titulo='Popular Movies' />
            <Carrusel data={ upComingMovies } titulo='Rated Movies' />

        </div>
    )
}

export default HomeView;