import useWindowSize from '../hooks/useWindowResize'
import MarginTop from '../wrappers/MarginTop'

function UseWindowSize() {
  const {width, height} = useWindowSize()
  return (
    <MarginTop>width: {width}, height: {height}</MarginTop>
  )
}

export default UseWindowSize