import React from 'react'
import Carrusel from '../../carrusel/Carrusel'

const ContenedorCarousel = ({ title, data }) => {

  return (
    <div className=''>
      <Carrusel data={data} titulo={title} />
    </div>
  )
}

export default ContenedorCarousel