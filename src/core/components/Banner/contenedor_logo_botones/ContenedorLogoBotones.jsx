import React from 'react'
import Logo_ from './logo/Logo_'
import ContenedorBotones from './contenedor_botones/ContenedorBotones'

const ContenedorLogoBotones = ({ children, ...props }) => {

    return (
        <div className='position-relative  w-25 h-100' style={{ marginLeft:'40px' }}>
            <div className='position-absolute container top-50'>
                {children}
                <ContenedorBotones />
            </div>
        </div>
    )
}


const Logo = ({ ...props }) => {
    return <Logo_ {...props} />
}

ContenedorLogoBotones.Logo = Logo;

export default ContenedorLogoBotones