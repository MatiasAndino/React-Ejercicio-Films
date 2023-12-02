import React, { useEffect, useState } from 'react'
import Card from '../card/Card__';
import Carrusel from '../carrusel/Carrusel';
import BackgroundImage from './background-image/BackgroundImage';
import Contenido from './Contenido';

import useSWR from 'swr'
import { getUpcomingMovies } from '../../features/home/services/movies.services';
import usePopularMovies from '../datasource/remote/tmdb/usePopularMovies';
import useTopRatedMovies from '../datasource/remote/tmdb/useTopRatedMovies';
import useUpCommingMovies from '../datasource/remote/tmdb/useUpCommingMovies';
import Logo from './logo/Logo';
import Tarjeta from './tarjeta/Tarjeta';

/*

    SE PODRIA COLOCAR UN CONDICIONAL QUE CONTROLE SI ES LLAMADO DESDE EL MAINVIEW CARGUE XXXX, Y SI ES LLAMADO 
    EN EL MODAL HAGA OTRA COSA

*/
const Banner = ({ parent = 'HomeView', movie }) => {

    const [valorRandom, setValorRandom] = useState(0);

    const random = Math.floor(Math.random() * 19);
    // const { popularMovies, popularMoviesIsLoading } = usePopularMovies();
    // const { topRatedMovies, topRatedMoviesIsLoading } = useTopRatedMovies();
    const { upcomingMovies, upcomingMoviesIsLoading } = useUpCommingMovies();

    // popularMovies[random].backdrop

    useEffect(() => {
        console.log(parent, movie, '<---------')
        setValorRandom(random)
        
    },[])
    return (
        <>
            {
                !upcomingMoviesIsLoading &&
                < div className='' >

                    

                    <div className=''>
                        <BackgroundImage parent={parent} movie={ movie || upcomingMovies[valorRandom] } />
                    </div>

                    <div className="">
                        <Contenido parent={parent} data={upcomingMovies} />
                    </div>
                </div >

            }
        </>
    )
}

export default Banner;


///  || upcomingMovies[0]