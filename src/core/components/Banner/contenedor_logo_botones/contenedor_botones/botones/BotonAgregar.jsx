import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BotonAgregar = () => {
  return (
    <button className='btn text-light'>
      <FontAwesomeIcon icon={faPlus}  style={{fontSize:'1.5vw'}}/>
      </button>
    // <a href=""><FontAwesomeIcon className='text-light' icon={faPlus}  style={{fontSize:'1.5vw'}}/></a>
  )
}

export default BotonAgregar