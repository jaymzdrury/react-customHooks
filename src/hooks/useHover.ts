import React from "react";

export default function useHover() {
  const [isHovering, isHoveringSet] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>();

  const handleMouseOver = React.useCallback(() => isHoveringSet(true), []);
  const handleMouseOut = React.useCallback(() => isHoveringSet(false), []);

  const callbackRef = React.useCallback(
    (node: HTMLDivElement) => {
      if (ref.current) {
        ref.current.removeEventListener("mouseover", handleMouseOver);
        ref.current.removeEventListener("mouseout", handleMouseOut);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("mouseover", handleMouseOver);
        ref.current.addEventListener("mouseout", handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );
  return { callbackRef, isHovering };
}
