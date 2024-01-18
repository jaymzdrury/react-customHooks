import useHover from '../hooks/useHover'
import MarginTop from '../wrappers/MarginTop'

function UseHover() {
    const {callbackRef, isHovering} = useHover()

    return <MarginTop><div ref={callbackRef}>{isHovering ? 'Hovering' : 'Not Hovering'}</div></MarginTop>
}

export default UseHover