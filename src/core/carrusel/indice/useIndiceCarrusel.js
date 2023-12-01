import { useState } from "react"

const useIndiceCarrusel = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    
    function next(iteraciones) {
        setActiveIndex((activeIndex + 1) % iteraciones);
    }
    
    function prev(iteraciones) {
        setActiveIndex((activeIndex - 1 + iteraciones) % iteraciones);
    }

    function reset() {
        setActiveIndex(0);
    }

    return { activeIndex, next, prev, reset };
}

export default useIndiceCarrusel;