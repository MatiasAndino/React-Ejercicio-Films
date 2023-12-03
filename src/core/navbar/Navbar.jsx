import React from 'react'
// import logo from '../../assets/skull.svg'
import logo from '../../assets/netflix128.png'
import { useAuth } from '../auth/hook/use_auth';
import LinkNavbar from './links/LinkNavbar';

const Navbar = () => {
    const { logout } = useAuth();

    return (

        // <div className="position-absolute bg-dark vw-100">

            <nav className="navbar navbar-expand-sm navbar-dark shadow-5-strong text-dark fixed-top bg-dark bg-opacity-25" >
                <div className='container-fluid d-flex'>
                    <div className="d-flex" style={{ marginLeft: '40px', height:'3vh' }}>
                        <a className="navbar-brand" href="#"><img src={logo} alt='logo' style={{marginTop:'-50px'}} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto fw-semibold">
                                <li className="nav-item">
                                    <LinkNavbar text={'Inicio'}/>
                                </li>
                                <li className="nav-item">
                                    <LinkNavbar text={'Series'}/>
                                </li>
                                <li className="nav-item">
                                    <LinkNavbar text={'Peliculas'}/>
                                </li>
                                <li className="nav-item">
                                    <LinkNavbar text={'Novedades Populares'}/>
                                </li>
                                <li className="nav-item">
                                    <LinkNavbar text={'Mi lista'}/>
                                </li>
                                <li className="nav-item">
                                    <LinkNavbar text={'Explora por idiomas'}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-danger' onClick={logout} >Logout</button>
                    </div>
                </div>
            </nav>

        // </div>
    )
}

export default Navbar