import { useState } from "react";
import { AuthContext } from "../context/auth_context"

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = async () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}