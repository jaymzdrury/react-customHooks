import { useEffect, useState } from "react"

function useScroll() {
    const [scroll, scrollSet] = useState(0)
    useEffect(() => {
        const handleScroll = () => scrollSet(window.pageYOffset)
        window.addEventListener('scroll',handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)        
    },[])
    return {scroll}
}

export default useScroll