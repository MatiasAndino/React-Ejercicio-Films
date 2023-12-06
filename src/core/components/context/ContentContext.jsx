import { createContext, useContext, useState } from "react";


export const ContentContext = createContext();

export const ContentModalProvider = ({children}) => {

    const [media, setMedia] = useState('');

    return (
        <ContentContext.Provider value={{media, setMedia}}>
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