import { useEffect, useState } from "react"

const useLocalStorage = () => {

    const storedItems = JSON.parse(localStorage.getItem('favorites'))

    const [items, setItems] = useState(storedItems || []);

    useEffect(() => {
        console.log(items)
        localStorage.setItem('favorites', JSON.stringify(items));
    }, [items])


    function includes(item) {

        return items.some(element => element.id === item.id);
    }

    function addItem(item) {
        if (items.includes(item)) return;
        setItems([...items, item]);
    }

    function removeItem(item) {
        const newArray = items.filter(element => element.id !== item.id);
        setItems(newArray)
    }

    function clear() {
        setItems([]);
    }

    return { includes, addItem, removeItem, clear }
}

export default useLocalStorage