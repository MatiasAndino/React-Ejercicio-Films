import React from 'react'
import CarruselFavoritos from './carruselFavoritos/CarruselFavoritos'
import { useFavoriteContext } from '../../providers/FavoritesProvider';


const ContenedorCarruselFavoritos = ({ items, style }) => {
    const { favoriteItems } = useFavoriteContext();

    return (
        <CarruselFavoritos titulo='Mi Lista' data={favoriteItems} items={items} style={style} />
    )
}

export default ContenedorCarruselFavoritos