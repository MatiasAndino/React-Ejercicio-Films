import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';

const HomeView = () => {

    const { isLoggedIn, logout } = useAuth();

    return (
        <>
            <h1>HOME VIEW</h1>
            <button onClick={ logout }>CERRAR SESIÓN</button>
        </>
    )
}

export default HomeView;