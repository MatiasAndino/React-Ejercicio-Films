import React from 'react'
import vacio from '../../../../assets/vacio.jpg'

import CardButtonsContainer from './botones_card/CardButtonsContainer';
import Grafico from './grafico/Grafico';
import MediaGenres from '../../utilities/MediaGenres';
import { useModalContext } from '../../context/ContentContext';


const Card = ({ media, posicion }) => {

    const { setMedia } = useModalContext();

    function updateMediaData() {
        setMedia(media);
    }

    // const rating = Math.floor(Number(media.rating) * 10);

    const emptyCard = () => {
        return <div
            className={`card border border-0 bg-dark ${posicion}`}
            style={{ visibility: 'hidden' }}
            key={Math.random()}
        >
            <img
                className='card-img-top'
                src={vacio}
                style={{ zIndex: '2' }}
            />
        </div>
    }

    const filter = () => {

        
        if (!media) {
            return emptyCard();
        }

        const backdrop = media.backdrop.includes('null') ? vacio : media.backdrop;

        return <div
            className={`card border border-0 bg-dark ${posicion}`}
            key={media.id}
            style={{ visibility: media.backdrop.includes('null') && 'visually-hidden' }}
            onMouseOver={updateMediaData}
        >
            <img
                className='card-img-top'
                src={backdrop}
                alt={media.title}
                key={media.id}
                style={{ zIndex: '2' }}
            />
            <div className="card-body bg-dark text-light">
                <CardButtonsContainer>
                    <CardButtonsContainer.AddButton
                        item={media}
                    />
                </CardButtonsContainer>

                <MediaGenres
                    genreIds={media.genreIds}
                    mediaType={media.mediaType}
                    maxGenresAllowed={3}
                    style={{ fontSize: '.65rem' }}
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
    }




    return (
        filter()
    )
}


export default Card;