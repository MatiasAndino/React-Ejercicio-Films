import React from 'react'

const BtnReproducir = ({ titulo }) => {

    function handleClick() {
        alert(`REPRODUCIR: ${ titulo }`)
    }

  return (
    <button onClick={ handleClick } className='btn btn-light text-dark m-1 fw-semibold'>▷ Reproducir</button>
  )
}

export default BtnReproducir