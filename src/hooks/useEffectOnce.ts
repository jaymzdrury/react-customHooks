import { EffectCallback, useEffect } from 'react'
function useEffectOnce(effect: EffectCallback) {
  return useEffect(effect ,[])
}
export default useEffectOnce