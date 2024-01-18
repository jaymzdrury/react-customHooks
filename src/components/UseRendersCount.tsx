import useRendersCount from "../hooks/useRendersCount"
import MarginTop from "../wrappers/MarginTop"

function UseRendersCount() {
    const rendersCount = useRendersCount()
    return <MarginTop>renders: {rendersCount}</MarginTop>
}

export default UseRendersCount