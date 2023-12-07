import React, { useEffect, useState } from 'react'
import CarruselFavoritos from './carruselFavoritos/CarruselFavoritos'
import { useFavoriteContext } from '../../providers/FavoritesProvider';


const ContenedorCarruselFavoritos = ({ items, style }) => {
    const { favoriteItems } = useFavoriteContext();
    const [carruselContent, setCarruselContent] = useState(<></>)
    
    
    const renderFavorites = favoriteItems.length > 0;
    useEffect(() => {
        const content = renderFavorites && <CarruselFavoritos key={Math.random()} titulo='Mi Lista' data={favoriteItems} items={items} style={style} />
        setCarruselContent(content);
    },[favoriteItems, items])

    return (
        <>
            {carruselContent}
            {/* {renderFavorites && <CarruselFavoritos titulo='Mi Lista' data={favoriteItems} items={items} style={style} />} */}
        </>
    )
}

export default ContenedorCarruselFavoritos