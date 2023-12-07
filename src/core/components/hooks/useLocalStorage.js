import { useEffect, useState } from "react"

const useLocalStorage = () => {

    const storedItems = JSON.parse(localStorage.getItem('favorites'))

    const [favoriteItems, setFavoriteItems] = useState(storedItems || []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteItems));
    }, [favoriteItems])


    function includes(item) {
        return favoriteItems.some(element => element.id === item.id);
    }

    function addItem(item) {
        if (favoriteItems.includes(item)) return;
        setFavoriteItems([...favoriteItems, item]);
    }

    function removeItem(item) {
        const newArray = favoriteItems.filter(element => element.id !== item.id);
        setFavoriteItems(newArray)
    }

    function clear() {
        setFavoriteItems([]);
    }

    return { includes, addItem, removeItem, clear, favoriteItems }
}

export default useLocalStorage