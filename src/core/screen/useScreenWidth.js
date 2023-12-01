import { useEffect, useState } from "react"

const SCREEN_WIDTH = {
    0: { width: 1400, items: 6, style: { height: '9.7vw' } },
    1: { width: 1100, items: 5, style: { height: '11.4vw' } },
    2: { width: 700, items: 4, style: { height: '14vw' } },
    3: { width: 0, items: 3, style: { height: '18.116vw' } },
}

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const detectSize = (event) => {
        event.preventDefault();
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [screenWidth])

    switch (true) {
        case (screenWidth >= SCREEN_WIDTH[0].width): return { screenWidth, items: SCREEN_WIDTH[0].items, style: SCREEN_WIDTH[0].style };
        case (screenWidth >= SCREEN_WIDTH[1].width): return { screenWidth, items: SCREEN_WIDTH[1].items, style: SCREEN_WIDTH[1].style };
        case (screenWidth >= SCREEN_WIDTH[2].width): return { screenWidth, items: SCREEN_WIDTH[2].items, style: SCREEN_WIDTH[2].style };
        default: return { screenWidth, items: SCREEN_WIDTH[3].items, style: SCREEN_WIDTH[3].style };
    }
}

export default useScreenWidth;