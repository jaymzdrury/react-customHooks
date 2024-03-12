import React from "react";
import useDebounce from "../hooks/useDebounce";
import MarginTop from "../ui/MarginTop";

export default function UseDebounce(): JSX.Element {
  const [value, valueSet] = React.useState("");
  const { debouncedValue } = useDebounce(value, 1000);

  return (
    <MarginTop>
      <label>Debounced Value: {debouncedValue}</label>
      <br />
      <input onChange={(e) => valueSet(e.target.value)} />
    </MarginTop>
  );
}
