import { useState } from "react"

export default function useMap(defaultValue: Array<any>) {
  const [array, setArray] = useState(defaultValue)

  function push(element: any) {
    setArray(a => [...a, element])
  }

  function filter<T>(callback: (element: any) => void) {
    setArray((a: T[]) => a.filter(callback));
  }

  function update(index: number, newElement: any) {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ])
  }

  function remove(index: number) {
    setArray((a: Array<Element>) => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(defaultValue)
  }

  return { array, set: setArray, push, filter, update, remove, clear, reset }
}
