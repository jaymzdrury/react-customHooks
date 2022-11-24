import {useState, useEffect} from 'react'

function useDebounce(value: string, ms: number) {
  const [debouncedValue, debouncedValueSet] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      debouncedValueSet(value)
    },ms)
    return () => clearTimeout(handler)
  },[value,ms])
  return {debouncedValue}
}

export default useDebounce