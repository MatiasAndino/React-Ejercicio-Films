import React from 'react'
// import ima from '../../../assets/vacio.jpg'
import vacio from '../../../assets/vacio.jpg'


const PATH = './src/images/'

const Card = ({ imagen, setModalData, extra }) => {

    function openHandleModal() {
        setModalData(imagen);
    }

    // const vacio = '../../../assets/vacio.jpg'
    const backdrop = imagen.backdrop.includes('null') ? vacio : imagen.backdrop;
    console.log(backdrop)
    return (
        <div className={`card border border-1 border-black ${extra} `} key={imagen.id} >
            <img
                className='card-img-top'
                src={vacio}
                alt={imagen.title}
                key={imagen.id}
                style={{ zIndex: '2' }}
                onClick={openHandleModal}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            />
            <div className="card-body bg-dark text-light">
                <p className="card-text">❤❤ ❤❤</p>
            </div>
        </div>
    )
}


export default Card;