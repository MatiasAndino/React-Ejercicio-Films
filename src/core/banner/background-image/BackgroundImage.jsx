import React from 'react'

const BackgroundImage = ({ parent, src = 'https://occ-0-3791-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABU1Czziam0slhA3T09BuJd70yj6v2tt42thd3cvpM-2E_bOAfttQ-b2wITR4RDJKkACCSUSnK7V20Fp7K7q5CBUsEG9MaTwgXQFq.webp?r=456' }) => {

  const style = {
    width:'100%',
    maxHeight: 'auto',
    zIndex: '1',
  };

/* QUITAR gradient-banner-image (tambien quitar el guion a modal) y dejar en el css lo siguiente .gradient-banner-image.modal */


  return (
    <div className='position-relative'>
    {/* <div className='position-relative' style={{height: '100%'}}> */}
      {/* <img src='src/assets/imagenes/16x9-solid.jpg' className="" alt="..." style={ style }/> */}
      <img src={src} className="rounded" alt="..." style={ style }/>
      <div className={ `gradient-banner-image gradient-banner-image${ parent === 'Banner' && '-modal' } position-absolute bottom-0` }></div>
      {/* <div className='gradient-banner-image position-absolute top-50'></div> */}
    </div>
      // <div className={ `gradient-banner-image gradient-banner-image${ parent === 'Banner' && '-modal' } position-absolute top-50` }></div>
  )
}

export default BackgroundImage;