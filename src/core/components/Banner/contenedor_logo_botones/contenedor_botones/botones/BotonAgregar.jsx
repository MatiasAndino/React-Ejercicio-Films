import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BotonAgregar = () => {
  return (
    <a href=""><FontAwesomeIcon className='text-light' icon={faPlus} /></a>
  )
}

export default BotonAgregar