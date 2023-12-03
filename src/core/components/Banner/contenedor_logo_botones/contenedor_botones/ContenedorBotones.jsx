import React from 'react'
import BotonReproducir from './botones/BotonReproducir'
import BotonInformacion from './botones/BotonInformacion'

const ContenedorBotones = ({movie}) => {

  const contenedorBotonesStyle = {
    minHeight:'2.5vw', 
    minWidth:'80vw'
  }

  return (
    <div className="top-100 d-flex justify-content-start" style={contenedorBotonesStyle}>
        <div className="m-2">
            <BotonReproducir />
        </div>
        <div className="m-2">
            <BotonInformacion movie={movie} />
        </div>
    </div>
  )
}

export default ContenedorBotones