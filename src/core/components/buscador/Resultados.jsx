import React, { useEffect, useState } from 'react'
import Card from '../carrusel/card/Card';
import { tdmbMoviesTvAdapter } from '../../../features/home/services/adapters/tmdb.adapters';

function Resultados({ filtro }) {

    const [medias, setMedias] = useState([]);

    const searchMovie = async (e) => {
        // e.preventDefault();
        try {
            const url = `https://api.themoviedb.org/3/search/movie?query=${filtro}&api_key=${import.meta.env.VITE_APP_TMDB_API}`
            const res = await fetch(url);
            const data = await res.json();

            // setMedias(data.results)
            setMedias(tdmbMoviesTvAdapter(data))

        } catch (error) {
            console.log('RESULTADOS -', error)
        }
    }

    useEffect(() => {
        searchMovie();
        console.log(medias)
    }, [filtro])

    return (
        <div className='bg-dark vh-100'>
            <div className='mx-auto p-5' style={{ width: '90%', height: '90%' }}>

                <div className='row'>
                    {
                        medias.length !== 0
                            ? medias.map(media => (

                                <>
                                    {
                                        !media.backdrop.includes('null') &&
                                        < div className="p-2 mb-2 col-2">
                                            <Card
                                                media={media}
                                                key={!!media ? media.id : Math.random()}
                                            />
                                        </div>
                                    }
                                </>

                            ))

                            : <h3 className='text-center m-5 p-5'>La búsqueda de "{filtro}" no arrojó coincidencias.</h3>
                    }
                </div>
            </div>
        </div >
    )
}

export default Resultados