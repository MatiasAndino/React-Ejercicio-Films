import React from 'react'

const BackgroundImage_ = ({ media }) => {

    const gradientStyle = {
        marginBottom: '-5px',
        height: '5vw',
        width: '100%',
        background: 'linear-gradient(0deg, rgba(33, 37, 41, 1) 25%, rgba(0, 212, 255, 0) 100%)'
    }

    return (

        <>
            <img className='img-fluid w-100 rounded' src={media.poster} alt={media.title} />
            <div className='position-absolute bottom-0' style={gradientStyle}></div>
        </>

    )
}

export default BackgroundImage_