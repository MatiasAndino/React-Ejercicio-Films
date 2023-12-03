import axios from 'axios';
import React, { useEffect, useState } from 'react'

const URL = 'https://www.themoviedb.org/t/p/original';
const BORRAR = '901362';

const Logo_ = ({ movie }) => {
    const [data, setData] = useState('')

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movie.id}/images`,
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

                let path = '';
                try {
                    path = logos[0].file_path;
                } catch (error) {
                    console.log('LOGO->', error)
                }

                setData(<img className='img-fluid' src={URL + path} />);

            })
            .catch(function (error) {
                console.error(error);
            });

    }, [])


    return (
        <>
            {data}
        </>
    )
}

export default Logo_
