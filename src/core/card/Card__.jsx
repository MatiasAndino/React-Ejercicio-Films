import React from 'react'
import BtnReproducir from '../buttons/BtnReproducir'
import BtnMasInformacion from '../buttons/BtnMasInformacion'

const Card__ = ({ titulo, introduccion }) => {
  const fontSizeP = {
    fontSize: '1vw',
  }
  const fontSizeT = {
    fontSize: '4vw',
  }
  return (
      <div className="card m-2 border border-0 pt-5 bg-transparent" id='card' style={{width:'40%'}}>
        <div className="card-body">
          <h1 className="card-title text-center fw-bold text-light" style={ fontSizeT }>{ titulo }</h1>
          <p className="card-text fw-semibold mt-4 text-light" style={ fontSizeP }>{ introduccion }</p>
          <BtnReproducir titulo={titulo} />
          <BtnMasInformacion />
        </div>
      </div>

  )
}

export default Card__