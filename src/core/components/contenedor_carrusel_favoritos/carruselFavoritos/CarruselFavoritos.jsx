import React, { useEffect, useState } from 'react';
import Card from '../../carrusel/card/Card';
import useIndiceCarrusel from '../../carrusel/indice/useIndiceCarrusel';

const CarruselFavoritos = ({ titulo, data, items, style  }) => {
    
    const { activeIndex, nextIndex, prevIndex, resetIndex } = useIndiceCarrusel();
    const [movies, setMovies] = useState(data);
    const [carouselContent, setCarouselContent] = useState({ items, content: [] });

    const id = titulo.replaceAll(' ', '_');
    const target = `#${id}`;
    
    const total = movies.length;
    const iteraciones = Math.ceil(total / items);
    
    function createElements() {
        const posicion = carouselContent.items * activeIndex;
        const diferencia = carouselContent.items - (movies.length % carouselContent.items);
        const completarLista = diferencia > 0 ? [...Array(diferencia)].map(_ => null) : [];

        const newMovieList = [...movies.slice(posicion), ...completarLista];
        const elements = [];

        for (let index = 0; index < iteraciones; index++) {
            const inicio = index * items;
            const fin = (index + 1) * items;

            elements.push(newMovieList.slice(inicio, fin));
        }
        
        return {elements, newMovieList};
    }

    function updateCarousel(elements) {
        return elements.map((movieList, index) => {
            return (
                <div className={`carousel-item ${index === 0 && 'active'}`} key={Math.random()}>
                    <div
                        className='cards-wrapper align-items-center'
                        style={{ overflow: 'visible', ...style }}
                    >
                        {
                            movieList.map((media, i) => (
                                <Card
                                    media={media}
                                    key={!!media ? media.id : Math.floor(Math.random())}
                                    posicion={i === 0 ? 'primero' : i === items - 1 ? 'ultimo' : ''}
                                />
                            ))
                        }
                    </div>
                </div>
            )
        })
    }

    useEffect(() => {

        resetIndex();

        const {elements, newMovieList} = createElements();

        const updatedCarouselContent = updateCarousel(elements);

        setCarouselContent({ items, content: updatedCarouselContent });
        setMovies(newMovieList);

    }, [items])


    return (
        <div className="container-fluid">
            <div style={{ height: '30px' }}></div>
            <h2 className='text-light m-2 align-text-top' style={{ fontSize: '1.5vw' }} >{titulo}</h2>
            <div id={id} className="carousel slide d-flex justify-content-center">
                <div className="carousel-inner" style={{ width: '95%', overflow: 'visible' }} >
                    {
                        carouselContent.content
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={target} data-bs-slide="prev" onClick={() => prevIndex(iteraciones)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={target} data-bs-slide="next" onClick={() => nextIndex(iteraciones)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default CarruselFavoritos;