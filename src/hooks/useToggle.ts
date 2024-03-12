import React from "react";

const toggleReducer = (state: boolean, nextValue?: unknown): boolean =>
  typeof nextValue === "boolean" ? nextValue : !state;

export default function useToggle(
  initialValue: boolean
): [boolean, (nextValue?: unknown) => void] {
  return React.useReducer<React.Reducer<boolean, unknown>>(
    toggleReducer,
    initialValue
  );
}
