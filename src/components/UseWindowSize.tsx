import useWindowSize from '../hooks/useWindowResize'

function UseWindowSize() {
    const {width, height} = useWindowSize()
  return (
    <div>width: {width}, height: {height}</div>
  )
}

export default UseWindowSize