import useHover from '../hooks/useHover'
import Box from '../wrappers/Box'

function UseHover() {
    const [hoverRef, isHovering] = useHover()

    return <Box><div ref={hoverRef}>{isHovering ? 'Hovering' : 'Not Hovering'}</div></Box>
}

export default UseHover