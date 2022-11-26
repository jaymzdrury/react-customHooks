import useHover from '../hooks/useHover'
import MarginTop from '../wrappers/MarginTop'

function UseHover() {
    const [hoverRef, isHovering] = useHover()

    return <MarginTop><div ref={hoverRef}>{isHovering ? 'Hovering' : 'Not Hovering'}</div></MarginTop>
}

export default UseHover