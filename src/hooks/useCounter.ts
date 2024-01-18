import { useState } from "react"

function useCounter(initialValue: number) {
  const [value, valueSet] = useState(initialValue)
  const increment = () => valueSet(c => c + 1)
  const decrement = () => valueSet(c => c - 1)
  const reset = () => valueSet(initialValue)
    
  return {value, increment, decrement, reset}
}

useCounter.defaultProps = {
    initialValue: 0
}

export default useCounter