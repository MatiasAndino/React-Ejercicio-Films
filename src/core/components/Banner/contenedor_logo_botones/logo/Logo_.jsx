import axios from 'axios';
import React, { useEffect, useState } from 'react'

const URL = 'https://www.themoviedb.org/t/p/w1280';
// const URL = 'https://www.themoviedb.org/t/p/original';

const Logo_ = ({ movie }) => {
    const [data, setData] = useState('')


    const tipo = movie.date !== undefined ? 'tv' : 'movie';

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${tipo}/${movie.id}/images`,
        // url: `https://api.themoviedb.org/3/movie/${movie.id}/images`,
        params: { include_image_language: 'en', language: 'en' },
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_APP_TMDB_AUTH,
        }
    };


    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {

                const { logos } = response.data;
                
                let ancho = 'w-100'
                let path = '';
                try {
                    path = logos[0].file_path;
                    if (logos[0].aspect_ratio < 1.35) ancho = 'w-50';
                } catch (error) {
                    console.log('LOGO->', error)
                }

                setData(<img className={`img-fluid ${ancho}`} src={URL + path} />);

            })
            .catch(function (error) {
                console.error(error);
            });

    }, [movie])


    return (
        <>
            {data}
        </>
    )
}

export default Logo_
