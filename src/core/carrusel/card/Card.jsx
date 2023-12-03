import React from 'react'
import vacio from '../../../assets/vacio.jpg'
import { useModalContext } from '../../components/context/ContentContext';


const PATH = './src/images/'

const Card = ({ imagen, setModalData, posicion }) => {

    const { setMovie } = useModalContext();

    function handleClick() {
        setMovie(imagen);
    }

    const backdrop = imagen.backdrop.includes('null') ? vacio : imagen.backdrop;

    return (
        <div className={`card border border-1 border-black ${posicion} `} key={imagen.id} >
            <img
                className='card-img-top'
                src={backdrop}
                alt={imagen.title}
                key={imagen.id}
                style={{ zIndex: '2' }}
                onClick={handleClick}
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