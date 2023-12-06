import React from 'react'
import Logo_ from './logo/Logo_'
import ContenedorBotones from './contenedor_botones/ContenedorBotones'
import ContenedorBotonesBanner from './contenedor_botones/ContenedorBotonesBanner';

const BANNER_FORMAT = 'h-100 top-100';
const HOMEVIEW_FORMAT = 'h-50 top-50';

const ContenedorLogoBotones = ({ children, ...props }) => {

    const { origen, movie } = props;


    const formato = origen ? HOMEVIEW_FORMAT : BANNER_FORMAT;

    return (
        <div className='h-50 w-75 position-absolute top-0'>

            <div className={`w-50 position-absolute ms-5 d-flex justify-content-center flex-column ${formato}`} >
                <Logo_ movie={movie} />
                
                {
                    origen
                        ? <ContenedorBotones movie={movie} />
                        : <ContenedorBotonesBanner />
                }
            </div>
        </div>
    )
}

export default ContenedorLogoBotones