import React from 'react'

const Tarjeta = ({ src }) => {
    const style = {
        marginLeft: '50px',
        width: '40%',
        height: '20%',
        zIndex: '2'
    }
  return (
    <div className='position-absolute top-50 border border-0 text-light' style={style}>
        <h1 className='fw-bold text-center' style={{ fontSize: '3vw' }}>{src.title}</h1>
        <p className='' style={{ fontSize: '1.2vw' }}>{src.description}</p>
    </div>
  )
}

export default Tarjeta