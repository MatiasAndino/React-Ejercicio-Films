import React from 'react'
import vacio from '../../../assets/vacio.jpg'
import { useModalContext } from '../../components/context/ContentContext';
import CardButtonsContainer from './botones_card/CardButtonsContainer';
import Grafico from './grafico/grafico';

const MOVIE_GENRES = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
}

const TV_GENRES = {
    10759: 'Action & Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    10762: 'Kids',
    9648: 'Mystery',
    10763: 'News ',
    10764: 'Reality',
    10765: 'Sci-Fi & Fantasy',
    10766: 'Soap',
    10767: 'Talk',
    10768: 'War & Politics',
    37: 'Western',
}

const MAX_GENRES_ALLOWED = 3;

const Card = ({ movie, posicion, mediaType }) => {

    const { setMovie } = useModalContext();

    function handleClick() {
        setMovie(movie);
    }

    const iterations = MAX_GENRES_ALLOWED <= movie.genreIds.length ? MAX_GENRES_ALLOWED : movie.genreIds.length;
    const genre = mediaType === 'movie' ? MOVIE_GENRES : TV_GENRES;
    const mediaGenres = [...Array(iterations)].map((_, i) => movie.genreIds[i]);

    const backdrop = movie.backdrop.includes('null') ? vacio : movie.backdrop;
    const rating = Math.floor(Number(movie.rating) * 10);

    return (
        <div className={`card border border-0 bg-dark ${posicion} `} key={movie.id} >
            <img
                className='card-img-top'
                src={backdrop}
                alt={movie.title}
                key={movie.id}
                style={{ zIndex: '2' }}
                onClick={handleClick}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            />
            <div className="card-body bg-dark text-light">
                <CardButtonsContainer />

                <ul class="list-group list-group-horizontal bg-transparent border border-0">
                    {
                        mediaGenres.map((e, i) => (
                            <span className='d-inline-block text-truncate uj' >{genre[e]}{(i !== mediaGenres.length - 1) && ' • '}</span>
                        ))
                    }
                </ul>
                <Grafico valor={rating} />
            </div>
        </div>
    )
}


export default Card;