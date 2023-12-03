import React from 'react'
import { ContentModalProvider } from '../context/ContentContext'
import Navbar from '../../navbar/Navbar'
import Banner_ from '../Banner/Banner_'
import Modal from '../../modal/Modal'


const ORIGEN = 'HomeView';

const Content = () => {



    return (

        <ContentModalProvider>

            <Navbar />
            <Banner_ origen={ORIGEN} />
            <div className='vw-25 vh-100 fs-1 bg-dark text-center'>
                <Modal>
                    <Modal.Body />
                </Modal>
            </div>

        </ContentModalProvider>

    )
}

export default Content
// {/* <Modal.BannerModal parent='Banner' movie={''} /> */}