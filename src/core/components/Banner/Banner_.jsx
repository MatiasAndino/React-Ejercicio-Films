import React from 'react'
import BackgroundImage_ from './backgroundimage/BackgroundImage_'
import ContenedorLogoBotones from './contenedor_logo_botones/ContenedorLogoBotones'
import ContenedorCarousel from './contenedor_carousel/ContenedorCarousel'
import Gradient from './gradient/Gradient'



const Banner_ = ({ origen }) => {


  const condicional = origen === 'HomeView';

  const height = condicional ? 'h-100' : 'h-50';
  const top = condicional ? 'top-50' : '';

  return (
    <div className='position-relative'>

      <BackgroundImage_ />

      <div className={`position-absolute w-100 top-50`}>
        <ContenedorLogoBotones>
          <ContenedorLogoBotones.Logo />
        </ContenedorLogoBotones>

      </div>

      {
        condicional &&
        <div className="position-absolute top-100 translate-middle start-50 w-100">
          <ContenedorCarousel />
        </div>
      }




    </div >
  )
}

export default Banner_

// movie={ movie }

/*
  CONTENEDOR BANNER
    ANCHO DEL 100% DE LA VENTANA  <-- PARA QUE EL BACKGROUND SE ADAPTE SOLO
















*/