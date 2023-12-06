import React, { useEffect, useState } from 'react';
import Card from './card/Card'
import useIndiceCarrusel from './indice/useIndiceCarrusel';
import useScreenWidth from '../../screen/useScreenWidth';

const Carrusel = ({ titulo, data }) => {


    const { items, style } = useScreenWidth();
    const { activeIndex, nextIndex, prevIndex, resetIndex } = useIndiceCarrusel();
    const [movies, setMovies] = useState(data);
    const [carouselContent, setCarouselContent] = useState({ items, content: [] });

    const id = titulo.replaceAll(' ', '_');
    const target = `#${id}`;
    
    const total = movies.length;
    const iteraciones = Math.ceil(total / items);
    
    
    function createElements() {
        const posicion = carouselContent.items * activeIndex;
        const newMovieList = [...movies.slice(posicion), ...movies.slice(0, posicion)];
        const elements = [];

        for (let index = 0; index < iteraciones; index++) {
            const inicio = index * items;
            const fin = (index + 1) * items;

            if ((index === iteraciones - 1) && (total % items !== 0)) {
                const rest = (items - total % items);
                const newInicio = inicio - rest;
                elements.push(newMovieList.slice(newInicio));
                break;
            }

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
                            movieList.map((movie, i) => (
                                <Card
                                    movie={movie}
                                    key={movie.id}
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

export default Carrusel;

/* <div id="carouselExample" className="carousel slide d-flex justify-content-center"> */

/* useScreenWidth no debe regresar la variable screenWidht */
/* useScreenWidth no debe regresar la variable screenWidht */
/* useScreenWidth no debe regresar la variable screenWidht */
/* useScreenWidth no debe regresar la variable screenWidht */
/* useScreenWidth no debe regresar la variable screenWidht */
/* useScreenWidth no debe regresar la variable screenWidht */