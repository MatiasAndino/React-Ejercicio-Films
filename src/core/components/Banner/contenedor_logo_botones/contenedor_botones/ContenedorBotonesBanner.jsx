import React from 'react'
import BotonReproducir from './botones/BotonReproducir'
import BotonInformacion from './botones/BotonInformacion'
import BotonAgregar from './botones/BotonAgregar'
import BotonThumbsup from './botones/BotonThumbsup'

const ContenedorBotonesBanner = () => {


  const contenedorBotonesStyle = {
    minHeight:'2vw', 
    minWidth:'70vw'
  }

  return (
    <div className="top-100 d-flex justify-content-start" style={contenedorBotonesStyle}>
        <div className="m-2">
            <BotonReproducir />
        </div>
        <div className="m-3">
            <BotonAgregar />
        </div>
        <div className="m-3">
            <BotonThumbsup />
        </div>
    </div>
  )
}

export default ContenedorBotonesBanner