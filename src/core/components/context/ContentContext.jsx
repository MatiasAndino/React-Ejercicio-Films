import { createContext, useContext, useState } from "react";


export const ContentContext = createContext();

export const ContentModalProvider = ({children}) => {

    const [movie, setMovie] = useState('');

    return (
        <ContentContext.Provider value={{movie, setMovie}}>
            {children}
        </ContentContext.Provider>
    )
}

export const useModalContext = () => {
    const context =  useContext(ContentContext);

    if (context === undefined) {
        throw new Error ('ContentContext must be used within a ContentModalProvider');
    }

    return context;
}