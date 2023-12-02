import React from 'react'


const PATH = './src/images/'

const Card = ({ imagen, setModalData, extra }) => {

    function openHandleModal() {
        setModalData(imagen);
    }


    return (
        <div className={`card border border-1 border-black bg-danger ${extra} `} key={imagen.id} >
            <img
                className='card-img-top'
                src={imagen.backdrop}
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