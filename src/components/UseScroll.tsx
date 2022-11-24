import useScroll from "../hooks/useScroll"
import Box from "../wrappers/Box"

function UseScroll() {
    const {scroll} = useScroll()
    return <Box>scroll: {scroll}</Box>
}

export default UseScroll