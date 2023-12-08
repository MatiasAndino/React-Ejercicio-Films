import React from 'react'
import CarruselFavoritos from './carruselFavoritos/CarruselFavoritos'
import { useFavoriteContext } from '../../providers/FavoritesProvider';


const ContenedorCarruselFavoritos = ({ items, style }) => {
    const { favoriteItems } = useFavoriteContext();

    const renderFavorites = favoriteItems.length > 0;

    return (
        <>
            {renderFavorites &&
                <CarruselFavoritos
                    titulo='Mi Lista'
                    data={favoriteItems}
                    items={items}
                    style={style}
                    key={Math.random()}
                />}
        </>
    )
}

export default ContenedorCarruselFavoritos