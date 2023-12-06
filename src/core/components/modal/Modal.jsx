import React from 'react'
// import { useModalContext } from '../components/context/ContentContext';
import Banner_ from '../Banner/Banner_';
import { useModalContext } from '../context/ContentContext';



const Modal = () => {
    const { media } = useModalContext();


    return (
        <>
            <div className="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark shadow-lg text-light">
                        <Banner_ origen="Banner" media={media} />
                        <div className="modal-body">
                            {/* <p className='text-success fw-bold'>97 % para ti</p> */}
                            {/* <span>comedia, accion, romance</span> */}
                            <div style={{ height: '100vh' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal



/*

BANNER
<Banner
                            parent='Banner'
                        // src={src}
                        />

HEADER
<div className="modal-header bg-dark text-light">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

BODY
<div className="modal-body">
                            ...
                        </div>

FOOTER
<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>


 BOTTON QUE NO HACE FALTA
                        
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>




    CUERPO
                <div className="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark shadow-lg">
                        

                    </div>
                </div>
            </div>




*/
