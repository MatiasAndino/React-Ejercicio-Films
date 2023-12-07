import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCheck } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useFavoriteContext } from '../../../../providers/FavoritesProvider';

const Add = ({ ...props }) => {
    const { item } = props;
    const { includes, addItem, removeItem } = useFavoriteContext();

    // const [currentState, setCurrectState] = useState(includes(item))
    const currentState = includes(item);


    function handleClick() {
        if (includes(item)) removeItem(item)
        else addItem(item)
    }

    useEffect(() => {
        
    },[currentState])

    return (
        <FontAwesomeIcon role='button' onClick={handleClick} icon={includes(item) ? faCheck : faAdd} />
    )
}

export default Add