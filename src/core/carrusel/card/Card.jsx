import React, { useEffect, useState } from 'react'
import Modal from '../../modal/Modal';


const PATH = './src/images/'

const Card = ({ imagen, setModalData, extra }) => {

    function openHandleModal() {
        setModalData(imagen.backdrop);
    }


    const r = Math.floor(Math.random() * 100)

    return (
        <div className={`card border border-1 border-black ${extra} `} key={Math.random() * 100000} >
            {/* <div className="card border border-0" key={Math.random() * 100000} > */}
            <img
                className='card-img-top'
                src={imagen.backdrop}
                alt={imagen}
                key={imagen}
                style={{ zIndex: '2' }}
                onClick={openHandleModal}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            />
            <div className="card-body bg-dark text-light">
                <p className="card-text">❤❤❤❤❤</p>
            </div>
        </div>
    )
}


export default Card;