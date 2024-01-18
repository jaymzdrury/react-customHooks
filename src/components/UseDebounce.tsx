import {useState} from 'react'
import useDebounce from "../hooks/useDebounce"
import MarginTop from '../wrappers/MarginTop'

function UseDebounce() {
    const [value, valueSet] = useState('')
    const {debouncedValue} = useDebounce(value, 1000)

  return (
    <MarginTop>
     <label>Debounced Value: {debouncedValue}</label>
     <br />
     <input onChange={(e) => valueSet(e.target.value)} />
    </MarginTop>
  )
}

export default UseDebounce