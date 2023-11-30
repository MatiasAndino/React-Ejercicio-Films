import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';

const LoginView = () => {

    const { login } = useAuth();

    return (
        <>
            <h1>LOGIN VIEW</h1>
            <button className='btn btn-outline-primary' onClick={ login }>INICIAR SESIÓN</button>
        </>
    )
}

export default LoginView;