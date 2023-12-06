import axios from 'axios';
import React, { useEffect, useState } from 'react'

const URL = 'https://www.themoviedb.org/t/p/w1280';

const Logo_ = ({ media }) => {
    const [data, setData] = useState('')

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${media.mediaType}/${media.id}/images`,
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
                    setData(<img className={`img-fluid ${ancho}`} src={URL + path} alt={media.title} />)
                } catch (error) {
                    console.log('LOGO->', error)
                    setData(<></>)
                }

            })
            .catch(function (error) {
                console.error(error);
            });

    }, [media])


    return (
        <>
            {data}
        </>
    )
}

export default Logo_
