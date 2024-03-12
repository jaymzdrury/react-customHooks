import React from "react";

export default function useInterval(
  callback: () => void,
  delay: number | null
) {
  const savedCallback = React.useRef<typeof callback>(callback);

  React.useEffect(() => (savedCallback.current = callback));

  React.useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(id);
    }
  }, [delay]);
}
