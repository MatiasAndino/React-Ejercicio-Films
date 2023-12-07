import { createContext, useContext, useState } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";


export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {

    const { includes, addItem, removeItem, clear, favoriteItems } = useLocalStorage();

    return (
        <FavoriteContext.Provider value={{ includes, addItem, removeItem, clear, favoriteItems }}>
            {children}
        </FavoriteContext.Provider>
    )
}

export const useFavoriteContext = () => {
    const context = useContext(FavoriteContext);

    if (context === undefined) {
        throw new Error('ContentContext must be used within a ContentModalProvider');
    }

    return context;
}