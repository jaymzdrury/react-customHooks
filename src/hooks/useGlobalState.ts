import { useCallback, useSyncExternalStore } from "react"

export function createState(initValue: any){
  return {
    listeners: [],
    state: initValue
  }
}

export function useGlobalState(config: {state: any, listeners: any[]}): [any, (stateOrSetter: any) => void] {
  const stateSet = useCallback((stateOrSetter: any) => {
    let next = stateOrSetter
    if(typeof stateOrSetter === 'function'){
      next = stateOrSetter(config.state)
    }
    config.state = next
    config.listeners.forEach(l => l())
  },[])

  const state = useSyncExternalStore(
    (listener: any) => {
      config.listeners.push(listener)
      return () => config.listeners.filter(l => l !== listener)
    },
    () => config.state,
  )
  return [state, stateSet]
}