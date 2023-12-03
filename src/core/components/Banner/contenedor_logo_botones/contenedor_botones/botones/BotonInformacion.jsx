import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const BotonInformacion = () => {
    const styleBtn = {
        width: '12vw',
        fontSize: '1vw',
        // width: 'calc(9vw + 60px)',
        // fontSize: 'calc(.7vw + .4rem)',
    }

  return (
    <button className='btn btn-secondary bg-secondary bg-opacity-75 fw-semibold ' style={styleBtn}><FontAwesomeIcon icon={faCircleInfo} />  Más Información</button>
  )
}

export default BotonInformacion