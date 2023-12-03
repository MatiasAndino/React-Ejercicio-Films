import React from 'react'

const Gradient = () => {
    const styleGradient = {
        height: '7vw',
        background: 'rgb(33, 37, 41)',
        background: 'linear-gradient(0deg, rgba(33, 37, 41, 1) 25%, rgba(0, 212, 255, 0) 100%)'
    }


    return (
        <div style={styleGradient}></div>
    )
}

export default Gradient