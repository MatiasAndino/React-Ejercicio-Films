import React from 'react'
import Carrusel from '../../carrusel/Carrusel'

const ContenedorCarousel = ({ title, data, mediaType }) => {

  return (
    <div className=''>
      <Carrusel data={data} titulo={title} mediaType={mediaType} />
    </div>
  )
}

export default ContenedorCarousel