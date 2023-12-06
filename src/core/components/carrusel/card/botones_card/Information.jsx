import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Information = () => {
  return (
    <a
      className=''
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <FontAwesomeIcon icon={faChevronDown} />

    </a>

  )
}

export default Information