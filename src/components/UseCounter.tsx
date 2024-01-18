import useCounter from "../hooks/useCounter"
import MarginTop from "../wrappers/MarginTop"

function UseCounter() {
  const {value, increment, decrement, reset} = useCounter(0)
  return (
    <MarginTop>
      <button onClick={increment}>+</button>{value}<button onClick={decrement}>-</button>
      <div onClick={reset}>RESET</div>
    </MarginTop>
  )
}

export default UseCounter