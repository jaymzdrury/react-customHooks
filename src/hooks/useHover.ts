import {useCallback, useState, useRef} from 'react'

function useHover() {
  const [isHovering, isHoveringSet] = useState<any>(false)
  const handleMouseOver = useCallback(() => isHoveringSet(true), [])
  const handleMouseOut = useCallback(() => isHoveringSet(false), [])

  const ref = useRef<any>()
  const callbackRef = useCallback(
      (node: any) => {
        if (ref.current) {
          ref.current.removeEventListener('mouseover', handleMouseOver);
          ref.current.removeEventListener('mouseout', handleMouseOut);
        }
  
        ref.current = node;
  
        if (ref.current) {
          ref.current.addEventListener('mouseover', handleMouseOver);
          ref.current.addEventListener('mouseout', handleMouseOut);
        }
      },
      [handleMouseOver, handleMouseOut]
    );
  return {callbackRef, isHovering, handleMouseOver, handleMouseOut}
}

export default useHover