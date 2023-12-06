import React from 'react'

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

const MAX_GENRES_ALLOWED_DEFAULT = 3;

const MediaGenres = ({ genreIds, mediaType, maxGenresAllowed = MAX_GENRES_ALLOWED_DEFAULT, style }) => {
    
    const iterations =  maxGenresAllowed <= genreIds.length ? maxGenresAllowed : genreIds.length;
    const genre = mediaType === 'movie' ? MOVIE_GENRES : TV_GENRES;
    const mediaGenres = [...Array(iterations)].map((_, i) => genreIds[i]);

    return (
        <ul className="list-group list-group-horizontal bg-transparent border border-0 mt-2">
            {
                mediaGenres.map((e, i) => (
                    <span className='d-inline-block text-truncate' key={e} style={style}>{genre[e]}{(i < iterations - 1) && <span className='mx-1'>•</span>}</span>
                ))
            }
        </ul>
    )
}

export default MediaGenres