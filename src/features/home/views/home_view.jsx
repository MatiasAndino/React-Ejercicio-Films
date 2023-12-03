import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';
import Banner_ from '../../../core/components/Banner/Banner_';
import Navbar from '../../../core/navbar/Navbar';
import Modal from '../../../core/modal/Modal';

const ORIGEN = 'HomeView'
const HomeView = () => {


    return (
        <div className='bg-danger'>
            <Navbar />
            <Banner_ origen={ORIGEN} />
            <div className='vw-25 vh-100 fs-1 bg-dark text-center'>
                <Modal>
                    <Modal.BannerModal parent='Banner' movie={''} />
                    <Modal.Body />
                </Modal>
            </div>
        </div>
    )
}

export default HomeView;



/* https://image.tmdb.org/t/p/original/xgGGinKRL8xeRkaAR9RMbtyk60y.jpg */


/*

Style on hover ----> para el titulo del carousel 


*/