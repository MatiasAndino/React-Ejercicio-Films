import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Logo = ({ movie }) => {

    const [informacion, setInformacion] = useState('')


    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movie.id}/images`,
        params: { include_image_language: 'en', language: 'en' },
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_APP_TMDB_AUTH
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

                setInformacion(<img className='img-fluid' src={'https://www.themoviedb.org/t/p/original' + path} />);

            })
            .catch(function (error) {
                console.error(error);
            });

    }, [])


    return (
        <div className='position-absolute w-75 h-100 row align-items-center p-4'>
            <div className='w-50 '>
                {informacion}
            </div>
        </div>
    )
}

export default Logo