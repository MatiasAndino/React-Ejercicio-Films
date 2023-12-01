

import React, { useEffect, useRef, useState } from 'react';
import useScreenWidth from '../screen/useScreenWidth';
import useIndiceCarrusel from './indice/useIndiceCarrusel';

const Carrusel2 = () => {
    const altoImagen = useRef();
    const PATH = './src/images/'
    const archivos = [
        { path: '00.jpg', visible: false }, { path: '01.jpg', visible: false }, { path: '02.jpg', visible: false },
        { path: '03.jpg', visible: false }, { path: '04.jpg', visible: false }, { path: '05.jpg', visible: false },
        { path: '06.jpg', visible: false }, { path: '07.jpg', visible: false }, { path: '08.jpg', visible: false },
        { path: '09.jpg', visible: false }, { path: '10.jpg', visible: false }, { path: '11.jpg', visible: false },
        { path: '12.jpg', visible: false }, { path: '13.jpg', visible: false }, { path: '14.jpg', visible: false },
        { path: '15.jpg', visible: false }, { path: '16.jpg', visible: false }, { path: '17.jpg', visible: false },
        { path: '18.jpg', visible: false }, { path: '19.jpg', visible: false },
    ]
    const screenWidth = useScreenWidth();
    const { activeIndex, next, prev, reset } = useIndiceCarrusel();
    const [imagenes, setImagenes] = useState(archivos);

    const windowOptions = {
        0: {
            items: 3,
            style: {
                // width: '32%',
                // height: 'auto',
                // marginLeft: '1%',
            }
        },
        1: {
            items: 4,
            style: {
                // width: '24%',
                // height: 'auto',
                // marginLeft: '.8%',
            }
        },
        2: {
            items: 5,
            style: {
                // width: '19.2%',
                // height: 'auto',
                // marginLeft: '.65%',
            }
        },
        3: {
            items: 6,
            style: {
                // width: '16.08%',
                // width: '15%',
                // height: 'auto',
                // marginLeft: '0%',
            }
        },
    }

    const items = windowOptions[screenWidth.items].items;
    const total = imagenes.length;
    const iteraciones = Math.ceil(total / items);

    const [carouselContent, setCarouselContent] = useState({ items, content: [] });

    
    useEffect(() => {

        reset();
        
        const posicion = carouselContent.items * activeIndex;
        
        const newImagenes = [...imagenes.slice(posicion), ...imagenes.slice(0, posicion)];

        const elements = [];

        for (let index = 0; index < iteraciones; index++) {
            elements.push(newImagenes.slice(index * items, (index + 1) * items));
        }
        

        const updatedCarouselContent = elements.map((element, index) => {
            return (
                <div className={`carousel-item ${index === 0 && 'active'}`} key={Math.random() * 100000} >
                    <p className='text-light m-2 fs-4' >Favoritos</p>
                    <div className='cards-wrapper' >
                        {
                            element.map((imagen, imagenIndex) => (
                                <div
                                    className={`card border border-0 bg-dark ${imagenIndex === 0 && 'primero'} ${imagenIndex === carouselContent.items && 'ultimo'}`}

                                >
                                    <img
                                        src={PATH + imagen.path}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className={`card-body bg-dark text-light`}>

                                        <h5 className="card-title">Card title</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={() => prev(iteraciones)}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={() => next(iteraciones)}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )
        })

        setCarouselContent({ items, content: updatedCarouselContent });
        setImagenes(newImagenes);
    }, [screenWidth.screenWidth])


    // console.log(screenWidth.screenWidth * .1)
    return (

        <div className='container-fluid border border-5 border-primary bg-info row align-items-start ' style={{ height: `${screenWidth.screenWidth * .117}px` }}>
            <div id="carouselExample" className="carousel slide d-flex justify-content-center bg-warning" style={{}}>
                <div className="carousel-inner bg-danger" style={{ width: '95%', overflow: 'visible' }} >
                    {/* <div className="carousel-inner row align-items-center bg-primary" style={{ width:'95%', overflow: 'visible', height: '15vh'}} > ESTE ESTABA ANTES */}
                    {
                        carouselContent.content
                    }
                </div>
            </div>
        </div>
    )
}

export default Carrusel2;


// element.map(imagen => (
//     <img
//         className='img-fluid rounded imagenn'
//         src={PATH + imagen}
//         alt={imagen}
//         key={imagen}
//         style={windowOptions[screenWidth].style}
//     />
// ))