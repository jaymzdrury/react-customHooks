import {useRef} from 'react'

function useRendersCount(): number {
  return ++useRef(0).current
}

export default useRendersCount