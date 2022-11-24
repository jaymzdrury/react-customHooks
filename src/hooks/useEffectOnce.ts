import { EffectCallback, useEffect } from 'react'
function useEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line
  return useEffect(effect ,[])
}
export default useEffectOnce