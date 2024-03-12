import React from "react";

export default function useDebounce(
  value: string,
  ms: number
): { debouncedValue: string } {
  const [debouncedValue, debouncedValueSet] = React.useState(value);

  React.useEffect(() => {
    const id = setTimeout(() => debouncedValueSet(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);

  return { debouncedValue };
}
