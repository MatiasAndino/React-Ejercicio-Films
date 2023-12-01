import React, { useEffect, useState } from 'react'
import Card from '../card/Card__';
import Carrusel from '../carrusel/Carrusel';
import BackgroundImage from './background-image/BackgroundImage';
import Contenido from './Contenido';

import useSWR from 'swr'
import { getUpcomingMovies } from '../../features/home/services/movies.services';

/*

    SE PODRIA COLOCAR UN CONDICIONAL QUE CONTROLE SI ES LLAMADO DESDE EL MAINVIEW CARGUE XXXX, Y SI ES LLAMADO 
    EN EL MODAL HAGA OTRA COSA

*/
const Banner = ({ parent = 'HomeView' }) => {
    

    const {
        data: upComingMovies,
        error: upComingMoviesError,
        isLoading: tupComingMoviesIsLoading,
    } = useSWR("getUpcomingMovies", getUpcomingMovies);

    const random = Math.floor(Math.random() * 19);

    const [datos, setDatos] = useState('');

    useEffect(() => {

        try {
            
        } catch (error) {
            console.log('BANNER ERROR,',error)
        }

    },[])


    return (
        <div className=''>

            <div className=''>
                <BackgroundImage parent={parent} />
            </div>

            <div className="">
                <Contenido parent={parent} data={ upComingMovies } />
                {/* <Contenido parent="MainView" /> */}
            </div>
        </div>
    )
}

export default Banner;