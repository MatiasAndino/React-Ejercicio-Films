import React, { useEffect, useState } from 'react';
import Card from './card/Card'
import Modal from '../modal/Modal';
import useIndiceCarrusel from './indice/useIndiceCarrusel';
import useScreenWidth from '../screen/useScreenWidth';
const PATH = './src/images/'

const Carrusel = ({ data, titulo }) => {


    const { screenWidth, items, style } = useScreenWidth();
    const { activeIndex, next, prev, reset } = useIndiceCarrusel();
    const [imagenes, setImagenes] = useState(null);

    const total = imagenes?.length;
    const iteraciones = Math.ceil(total / items);

    const [carouselContent, setCarouselContent] = useState({ items, content: [] });
    const [modalData, setModalData] = useState("");

    const id = titulo.replaceAll(' ', '_');
    const target = `#${id}`;

    useEffect(() => {
        if (imagenes === null) {
            console.log('ENTRA')
            setImagenes(data);
        }

    }, [data, imagenes])


    useEffect(() => {
        console.log('imagenes es igual a ', imagenes)
        if (!imagenes) return;
        try {
            reset();

            const posicion = carouselContent.items * activeIndex;

            const newImagenes = [...imagenes?.slice(posicion), ...imagenes?.slice(0, posicion)];

            const elements = [];

            for (let index = 0; index < iteraciones; index++) {
                elements.push(newImagenes.slice(index * items, (index + 1) * items));
            }

            const updatedCarouselContent = elements.map((element, index) => {
                return (
                    <div className={`carousel-item ${index === 0 && 'active'}`} key={Math.random() * 100000}>
                        <div className='cards-wrapper align-items-center' key={Math.random() * 100000} style={{ overflow: 'visible', ...style }}  >
                            {
                                element.map((imagen, i) => (
                                    <Card imagen={imagen} setModalData={setModalData} key={Math.random() * 100000} extra={i === 0 ? 'primero' : i === items - 1 ? 'ultimo' : ''} />
                                ))
                            }
                        </div>
                    </div>
                )
            })

            setCarouselContent({ items, content: updatedCarouselContent });
            setImagenes(newImagenes);

        } catch (error) {
            console.log('ERROR CARRUSEL,', error)

        }
    }, [screenWidth])


    return (
        <div className="container-fluid">
            <div style={{ height: '30px' }}></div>
            <h2 className='text-light m-2 fs-4 align-text-top'>{titulo}</h2>
            <div id={id} className="carousel slide d-flex justify-content-center">
                {/* <div id="carouselExample" className="carousel slide d-flex justify-content-center"> */}
                <div className="carousel-inner" style={{ width: '95%', overflow: 'visible' }} >
                    {
                        carouselContent.content
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={target} data-bs-slide="prev" onClick={() => prev(iteraciones)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={target} data-bs-slide="next" onClick={() => next(iteraciones)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Modal>
                <Modal.BannerModal parent='Banner' src={modalData} />
                <Modal.Body />
            </Modal>
        </div>

    )
}

export default Carrusel;

//CAMBIOS EN LA LINEA 72,73(COMENTADA ORIGINAL)