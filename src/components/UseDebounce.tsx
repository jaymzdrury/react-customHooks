import {useState} from 'react'
import useDebounce from "../hooks/useDebounce"
import Box from '../wrappers/Box'

function UseDebounce() {
    const [value, valueSet] = useState('')
    const {debouncedValue} = useDebounce(value, 1000)

  return (
    <Box>
     <label>Debounced Value: {debouncedValue}</label>
     <br />
     <input onChange={(e) => valueSet(e.target.value)} />
    </Box>
  )
}

export default UseDebounce