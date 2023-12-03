import React from 'react'
import Carrusel from '../../../carrusel/Carrusel'
import useUpCommingMovies from '../../../datasource/remote/tmdb/useUpCommingMovies';

const ContenedorCarousel = () => {
  const { upcomingMovies, upcomingMoviesIsLoading } = useUpCommingMovies();

  return (
    <div className=' w-100'>
        { !upcomingMoviesIsLoading && <Carrusel data={upcomingMovies} titulo='Upcoming Movies' />}
    </div>
  )
}

export default ContenedorCarousel