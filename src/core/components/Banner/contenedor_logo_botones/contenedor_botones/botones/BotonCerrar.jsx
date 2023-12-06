import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const BotonCerrar = () => {
  return (
    <a className='link-light bg-opacity-75 pe-auto fs-2 m-2' role='button' data-bs-dismiss="modal"><FontAwesomeIcon icon={faCircleXmark}/></a>
  )
}

export default BotonCerrar;