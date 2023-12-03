import { useState } from "react"

const useIndiceCarrusel = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    
    function nextIndex(iteraciones) {
        setActiveIndex((activeIndex + 1) % iteraciones);
    }
    
    function prevIndex(iteraciones) {
        setActiveIndex((activeIndex - 1 + iteraciones) % iteraciones);
    }

    function resetIndex() {
        setActiveIndex(0);
    }

    return { activeIndex, nextIndex, prevIndex, resetIndex };
}

export default useIndiceCarrusel;