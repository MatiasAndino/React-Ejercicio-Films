import React, { useState } from 'react'
import Carrusel from '../../../carrusel/Carrusel'
import useUpCommingMovies from '../../../datasource/remote/tmdb/useUpCommingMovies';

const ContenedorCarousel = ({ title, data }) => {

  return (
    <div className=' w-100'>
      {/* {!upcomingMoviesIsLoading && <Carrusel data={data} titulo={title} />} */}
      <Carrusel data={data} titulo={title} />
    </div>
  )
}

export default ContenedorCarousel