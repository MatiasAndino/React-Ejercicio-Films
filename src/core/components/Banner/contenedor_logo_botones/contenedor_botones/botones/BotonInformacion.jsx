import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import { useModalContext } from '../../../../context/ContentContext'

const BotonInformacion = ({ media }) => {
  const styleBtn = {
    width: '12vw',
    fontSize: '.8vw',
    height: '2vw',
    boxShadow: '0px 0px 200px 1px rgba(0,0,0,0.25)',
  }

  const { setMovie } = useModalContext();

  function handleClick() {
    setMovie(media);
  }

  return (
    <button
      className='btn btn-secondary bg-secondary bg-opacity-75 fw-semibold'
      style={styleBtn}
      onClick={handleClick} 
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <FontAwesomeIcon icon={faCircleInfo}/>   Más Información
    </button>
  )
}

export default BotonInformacion