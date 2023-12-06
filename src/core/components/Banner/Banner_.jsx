import React from 'react'
import BackgroundImage_ from './backgroundimage/BackgroundImage_'
import ContenedorLogoBotones from './contenedor_logo_botones/ContenedorLogoBotones'
import ContenedorCarousel from './contenedor_carousel/ContenedorCarousel'
import useUpCommingMovies from '../../datasource/remote/tmdb/useUpCommingMovies'


const CAROUSEL_ITEMS = 20;
const Banner_ = ({ origen, movie }) => {

  const { upcomingMovies, upcomingMoviesIsLoading } = useUpCommingMovies();

  const randomNumber = new Date().getMinutes() % CAROUSEL_ITEMS;
  
  const condicional = origen === 'HomeView';
 
  return (
    <>
      { !upcomingMoviesIsLoading &&
        <div className='position-relative'>

          <BackgroundImage_ movie={movie || upcomingMovies[randomNumber]} />

          <div className='position-absolute top-0 w-100 h-100 d-flex align-items-center'>
            <ContenedorLogoBotones origen={condicional} movie={movie || upcomingMovies[randomNumber]}>
              <ContenedorLogoBotones.Logo movie={movie || upcomingMovies[randomNumber]} />
            </ContenedorLogoBotones>

          </div>

          {
            condicional &&
            <div className="position-absolute w-100 bottom-0">
              <ContenedorCarousel title={'Upcoming Movies'} data={upcomingMovies} mediaType={'movie'} />
            </div>
          }
        </div >

      }
    </>
  )
}

export default Banner_

// movie={ movie }

/*
  CONTENEDOR BANNER
    ANCHO DEL 100% DE LA VENTANA  <-- PARA QUE EL BACKGROUND SE ADAPTE SOLO
















*/