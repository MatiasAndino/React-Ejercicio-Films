import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import React from 'react'

const BotonThumbsup = () => {
  return (

    <button className='btn text-light'>
      <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '1.5vw' }} />

    </button>

  )
}

export default BotonThumbsup