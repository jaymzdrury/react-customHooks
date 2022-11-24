import useCounter from "../hooks/useCounter"
import Box from "../wrappers/Box"

function UseCounter() {
  const {value, increment, decrement, reset} = useCounter(0)
  return (
    <Box>
      <button onClick={increment}>+</button>{value}<button onClick={decrement}>-</button>
      <div onClick={reset}>RESET</div>
    </Box>
  )
}

export default UseCounter