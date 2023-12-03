import React from 'react'

const DEFAULT_IMAGE = 'https://image.tmdb.org/t/p/original/xgGGinKRL8xeRkaAR9RMbtyk60y.jpg';
const BackgroundImage_ = () => {

    const gradientStyle = {
        marginBottom: '-5px',
        height: '10vw',
        width: '100%',
        background: 'rgb(33, 37, 41)',
        background: 'linear-gradient(0deg, rgba(33, 37, 41, 1) 25%, rgba(0, 212, 255, 0) 100%)'
    }


    return (

        <>
            <img className='img-fluid' src={DEFAULT_IMAGE}/>
            <div className='position-absolute bottom-0' style={gradientStyle}></div>
        </>

    )
}

export default BackgroundImage_


{/* <div className={`position-absolute w-100`} style={gradientStyle}></div> */}




// background: 'rgb(33, 37, 41)',
// background: 'linear - gradient(0deg, rgba(33, 37, 41, 1) 25 %, rgba(0, 212, 255, 0) 100 %)'