import React from "react";
import { Map, MapElement } from "../types/types";

export default function useMap(defaultValue: Map) {
  const [array, setArray] = React.useState(defaultValue);

  function push(element: MapElement) {
    setArray((a) => [...a, element]);
  }

  function filter(callback: (element: MapElement) => void) {
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: MapElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(defaultValue);
  }

  return { array, set: setArray, push, filter, update, remove, clear, reset };
}
