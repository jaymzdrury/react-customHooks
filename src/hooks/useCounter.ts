import React from "react";

export default function useCounter(initialValue: number) {
  const [value, valueSet] = React.useState(initialValue);

  const increment = () => valueSet((c) => c + 1);
  const decrement = () => valueSet((c) => c - 1);
  const reset = () => valueSet(initialValue);

  return { value, increment, decrement, reset };
}
