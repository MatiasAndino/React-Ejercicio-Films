import React from 'react'
import BackgroundImage_ from './backgroundimage/BackgroundImage_'
import ContenedorLogoBotones from './contenedor_logo_botones/ContenedorLogoBotones'
import ContenedorCarousel from './contenedor_carousel/ContenedorCarousel'
import useUpCommingMovies from '../../datasource/remote/tmdb/useUpCommingMovies'


const CAROUSEL_ITEMS = 20;
const Banner_ = ({ origen, media, items, style }) => {

  const { upcomingMovies, upcomingMoviesIsLoading } = useUpCommingMovies();

  const randomNumber = new Date().getMinutes() % CAROUSEL_ITEMS;

  const condicional = origen === 'HomeView';

  return (
    <>
      {!upcomingMoviesIsLoading &&
        <div className='position-relative'>

          <BackgroundImage_ media={media || upcomingMovies[randomNumber]} />

          <ContenedorLogoBotones origen={condicional} media={media || upcomingMovies[randomNumber]} />

          {
            condicional &&
            <div className="position-absolute w-100 bottom-0">
              <ContenedorCarousel title={'Upcoming Movies'} data={upcomingMovies} mediaType={'movie'} items={items} style={style} />
            </div>
          }
        </div >

      }
    </>
  )
}

export default Banner_