import useScroll from "../hooks/useScroll"
import MarginTop from "../wrappers/MarginTop"

function UseScroll() {
    const {scroll} = useScroll()
    return <MarginTop>scroll: {scroll}</MarginTop>
}

export default UseScroll