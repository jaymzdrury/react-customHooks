import useRendersCount from "../hooks/useRendersCount"
import Box from "../wrappers/Box"

function UseRendersCount() {
    const rendersCount = useRendersCount()
    return <Box>renders: {rendersCount}</Box>
}

export default UseRendersCount