import React from "react";

type WindowSize = {
  width: number;
  height: number;
};

export default function useWindowSize(): WindowSize {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    return () => window.removeEventListener("resize", changeWindowSize);
  }, []);

  return windowSize;
}
