import React from "react";

export default function useDebounce<T>(value: T, ms = 500) {
  const [debouncedValue, debouncedValueSet] = React.useState<T>(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => debouncedValueSet(value), ms);

    return () => clearTimeout(timeout);
  }, [value, ms]);

  return debouncedValue;
}
