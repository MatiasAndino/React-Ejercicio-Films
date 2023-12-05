import React, { useEffect } from 'react'

const Grafico = ({ valor }) => {

    useEffect(() => {

    }, [valor])

    return (
        <div className='position-relative d-flex justify-content-center align-items-center' style={{ '--porcentaje': valor }}>
            <svg width='60' height='60'>
                <circle className='circulogrande' r='26' cx='50%' cy='50%' pathLength='100'/>
                <circle className='circulo' r='20' cx='50%' cy='50%' pathLength='100'/>
                <circle className='circulo' r='20' cx='50%' cy='50%' pathLength='100'/>
            </svg>
            <span className='text-light position-absolute fw-bold' style={{ fontSize: '.8rem' }} >{valor}%</span>
        </div>
    )
}

export default Grafico