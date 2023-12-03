import React, { useEffect, useState } from 'react'
import BackgroundImage_ from './backgroundimage/BackgroundImage_'
import ContenedorLogoBotones from './contenedor_logo_botones/ContenedorLogoBotones'
import ContenedorCarousel from './contenedor_carousel/ContenedorCarousel'
import Gradient from './gradient/Gradient'
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

          <div className={`position-absolute w-100 top-50`}>
            <ContenedorLogoBotones origen={condicional} movie={movie || upcomingMovies[randomNumber]}>
              <ContenedorLogoBotones.Logo movie={movie || upcomingMovies[randomNumber]} />
              {/* <ContenedorLogoBotones.Logo movie={movie || upcomingMovies[randomNumber]} /> */}
            </ContenedorLogoBotones>

          </div>

          {
            condicional &&
            <div className="position-absolute w-100 bottom-0">
              <ContenedorCarousel title={'Upcoming Movies'} data={upcomingMovies} />
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