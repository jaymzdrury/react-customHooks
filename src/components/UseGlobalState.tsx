import React from "react";
import { createState, useGlobalState } from "../hooks/useGlobalState";
import MarginTop from "../ui/MarginTop";

const Count = createState(0);

function Counter(): JSX.Element {
  const [count, countSet] = useGlobalState(Count);
  return (
    <React.Fragment>
      Count: {count} <button onClick={() => countSet(count + 1)}>+</button>
    </React.Fragment>
  );
}
export default function UseGlobalState(): JSX.Element {
  return (
    <MarginTop>
      <Counter />
      <Counter />
    </MarginTop>
  );
}
