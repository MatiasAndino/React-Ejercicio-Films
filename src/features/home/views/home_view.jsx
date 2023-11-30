import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';
import Carrusel from '../../../core/media/components/Carrusel';

import {
    getPopularMovies,
    getTopRatedMovies,
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
        data: topRatedMovies,
        error: topRatedMoviesError,
        isLoading: topRatedMoviesIsLoading,
      } = useSWR("getTopRatedMovies", getTopRatedMovies);
      
      

    return (
        <>
            <h1>HOME VIEW</h1>
            <button className='btn btn-outline-danger' onClick={logout}>CERRAR SESIÓN</button>

            

        </>
    )
}

export default HomeView;