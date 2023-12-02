import React from 'react'
import Tarjeta from '../tarjeta/Tarjeta';
import Logo from '../logo/Logo';

const BackgroundImage = ({ parent, movie }) => {

  const style = {
    width: '100%',
    maxHeight: 'auto',
    zIndex: '1',
  };


  /* QUITAR gradient-banner-image (tambien quitar el guion a modal) y dejar en el css lo siguiente .gradient-banner-image.modal */

  return (
    <div className='position-relative'>
      <Logo movie={movie} />
      <img src={movie.backdrop} className="rounded" alt="backgroundImage" style={style} />
      <div className={`gradient-banner-image gradient-banner-image${parent === 'Banner' && '-modal'} position-absolute bottom-0`}></div>

      {/* {parent !== 'Banner' && <Tarjeta src={src} />} */}

    </div>
  )
}

export default BackgroundImage;