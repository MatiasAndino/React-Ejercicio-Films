import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React from 'react'



const BotonReproducir = () => {

    const styleBtn = {
        width: '8.5vw',
        fontSize: '1vw',
    }

  return (
    <button className='btn btn-light fw-semibold' style={styleBtn}><FontAwesomeIcon icon={faPlay} /> Reproducir</button>
  )
}

export default BotonReproducir