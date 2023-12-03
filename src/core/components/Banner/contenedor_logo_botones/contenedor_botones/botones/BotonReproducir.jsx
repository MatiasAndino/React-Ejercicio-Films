import React from 'react'



const BotonReproducir = () => {

    const styleBtn = {
        width: '8.5vw',
        fontSize: '1vw',
    }

  return (
    <button className='btn btn-light fw-semibold h-100' style={styleBtn}><FontAwesomeIcon icon="fa-solid fa-play" /> Reproducir</button>
  )
}

export default BotonReproducir