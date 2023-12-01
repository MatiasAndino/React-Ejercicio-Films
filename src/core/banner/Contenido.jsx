import React from 'react'
import Carrusel from '../carrusel/Carrusel'
import Carrusel2 from '../carrusel/Carrusel2'
import Card from '../card/Card__'

const Contenido = ({ parent }) => {

    /*
    * se modifico el ancho del div padre de card w-75
    * se le dio a card w-50



    */
    return (
        <div>
            <div className="position-relative mb-2">
                {
                    parent === 'MainView'
                        ? (
                            <div className='w-100 position-absolute bottom-0'>
                                {/* <Card titulo='The Office' introduccion='El iluso jefe Michael intenta encauzar el descontento de sus empleados en la empresa papelera Dunder Mifflin a traves de continuas debilidades y percances.' /> */}
                                {/* <Carrusel2 /> */}
                                <Carrusel />

                            </div>
                        )
                        :
                        <>
                            
                        </>
                }
            </div>
        </div>
    )
}

export default Contenido