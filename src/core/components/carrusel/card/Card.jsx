import React from 'react'
import vacio from '../../../../assets/vacio.jpg'

import CardButtonsContainer from './botones_card/CardButtonsContainer';
import Grafico from './grafico/Grafico';
import MediaGenres from '../../utilities/MediaGenres';
import { useModalContext } from '../../context/ContentContext';


const Card = ({ movie, posicion }) => {

    
    const { setMedia } = useModalContext();
    
    function updateMediaData() {
        setMedia(movie);
    }

    const backdrop = movie.backdrop.includes('null') ? vacio : movie.backdrop;
    const rating = Math.floor(Number(movie.rating) * 10);

    return (
        <div
            className={`card border border-0 bg-dark ${posicion}`}
            key={movie.id}
            style={{ visibility: movie.backdrop.includes('null') && 'visually-hidden' }}
            onMouseOver={updateMediaData}
        >
            <img
                className='card-img-top'
                src={backdrop}
                alt={movie.title}
                key={movie.id}
                style={{ zIndex: '2' }}
            />
            <div className="card-body bg-dark text-light">
                <CardButtonsContainer />

                <MediaGenres
                    genreIds={movie.genreIds}
                    mediaType={movie.mediaType}
                    maxGenresAllowed={3}
                />

                {/* <div className="position-relative">

                    <div className='row mt-2'>
                        <div className='col-4'>
                            <Grafico valor={rating} />
                        </div>
                        <div className='col-6 position-absolute' style={{ left: '2.5vw', top: '5px', lineHeight: '.8' }}>
                            <span style={{ fontSize: '.7rem' }}>Puntuación de usuario</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default Card;