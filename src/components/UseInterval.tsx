import React from "react";
import useInterval from "../hooks/useInterval";

export default function UseInterval(): JSX.Element {
  const [count, countSet] = React.useState(0);
  const [running, runningSet] = React.useState(true);
  useInterval(() => countSet(count + 1), running ? 1000 : null);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => runningSet((prev) => !prev)}>
        {running ? "STOP" : "START"}
      </button>
    </>
  );
}
