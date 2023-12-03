import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React from 'react'



const BotonReproducir = () => {

    const styleBtn = {
        width: '9vw',
        fontSize: '.8vw',
        height:'2vw',
        boxShadow: '0px 0px 200px 1px rgba(0,0,0,0.75)',
    }

  return (
    <button className='btn btn-light fw-semibold' style={styleBtn}><FontAwesomeIcon icon={faPlay} /> Reproducir</button>
  )
}

export default BotonReproducir