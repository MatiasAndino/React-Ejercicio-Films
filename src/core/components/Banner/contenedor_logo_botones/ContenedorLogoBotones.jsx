import React from 'react'
import Logo_ from './logo/Logo_'
import ContenedorBotones from './contenedor_botones/ContenedorBotones'
import ContenedorBotonesBanner from './contenedor_botones/ContenedorBotonesBanner';

const ContenedorLogoBotones = ({ children, ...props }) => {

    const {origen} = props;

    return (
        <div className='position-relative  w-25 h-100' style={{ marginLeft:'40px', marginTop:'-30px' }}>
            <div className='position-absolute container top-50'>
                {children}

                {
                    origen
                    ? <ContenedorBotones />
                    : <ContenedorBotonesBanner />
                }
            </div>
        </div>
    )
}


const Logo = ({ ...props }) => {
    return <Logo_ {...props} />
}

ContenedorLogoBotones.Logo = Logo;

export default ContenedorLogoBotones