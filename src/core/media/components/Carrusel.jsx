import React from 'react'

const BASE_IMAGE_PATH = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';


const Carrusel = ({ movies, titulo }) => {
    if (movies === undefined ) return;


    const items = document.querySelectorAll('.carousel .carousel-item')


    items.forEach((el) => {
        const elementosSlide = movies.length;
        let next = el.nextElementSibling
        for (let i=0; i < elementosSlide; i++) {
            if (!next) next = items[0]
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

    return (
        <div className='m-5'>
            <h3>{ titulo }</h3>
            <div id={ titulo } className="carousel slide">
                <div className="carousel-inner">
                    {
                        movies.map(({ id, original_title, poster_path }, index) => (
                            <div className={ `carousel-item ${ index === 0  && 'active'}` } key={ id }>
                                <div className="col-lg-2 col-md-3 p-1">
                                    <img className='img-fluid rounded' src={ BASE_IMAGE_PATH + poster_path } alt={ original_title } />
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalXl">Extra large modal</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={ `#${ titulo }` } data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={ `#${ titulo }` } data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrusel;