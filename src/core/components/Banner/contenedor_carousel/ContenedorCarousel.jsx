import React from 'react'
import Carrusel from '../../carrusel/Carrusel'

const ContenedorCarousel = ({ title, data, items, style }) => {


  return (
    <div className=''>
      <Carrusel data={data} titulo={title} items={items} style={style} />
    </div>
  )
}

export default ContenedorCarousel