import React from 'react'
import Carrusel from '../carrusel/Carrusel';


/*

    SE PODRIA COLOCAR UN CONDICIONAL QUE CONTROLE SI ES LLAMADO DESDE EL MAINVIEW CARGUE XXXX, Y SI ES LLAMADO 
    EN EL MODAL HAGA OTRA COSA

*/
const Banner2 = ({ parent = 'MainView' }) => {

    return (
        <div>
            <img src='src/assets/imagenes/16x9-solid.jpg' className="img-fluid" alt="..." style={{width:'100%', height:'auto'}} />
            <div className="row" style={{ alignSelf: 'flex-start', transform: 'translateY(-134%)' }}>
                {
                    parent === 'MainView'
                        ? (
                            <div>
                                <div className="col-12 row align-items-end" style={{ height: '100%' }}>
                                    <div className="col-5">
                                        {/* <Card titulo='The Office' introduccion='El iluso jefe Michael intenta encauzar el descontento de sus empleados en la empresa papelera Dunder Mifflin a traves de continuas debilidades y percances.' /> */}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <Carrusel />
                                </div>
                            </div>
                        )
                        :
                        <>
                            MODAL
                        </>
                }
            </div>
        </div>
    )
}

export default Banner2;