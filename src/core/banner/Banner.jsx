import React, { useEffect, useState } from 'react'
import Card from '../card/Card__';
import Carrusel from '../carrusel/Carrusel';
import BackgroundImage from './background-image/BackgroundImage';
import Contenido from './Contenido';

import useSWR from 'swr'
import { getUpcomingMovies } from '../../features/home/services/movies.services';
import usePopularMovies from '../datasource/remote/tmdb/usePopularMovies';

/*

    SE PODRIA COLOCAR UN CONDICIONAL QUE CONTROLE SI ES LLAMADO DESDE EL MAINVIEW CARGUE XXXX, Y SI ES LLAMADO 
    EN EL MODAL HAGA OTRA COSA

*/
const Banner = ({ parent = 'HomeView' }) => {


    const random = Math.floor(Math.random() * 19);
    const { popularMovies, popularMoviesIsLoading } = usePopularMovies();


    return (
        <>
            {
                !popularMoviesIsLoading &&
                < div className='' >

                    <div className=''>
                        <BackgroundImage parent={parent} src={popularMovies[random].backdrop} />
                    </div>

                    <div className="">
                        <Contenido parent={parent} data={popularMovies} />
                    </div>
                </div >

            }
        </>
    )
}

export default Banner;