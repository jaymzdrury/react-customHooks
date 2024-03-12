import React from "react";

export default function useRendersCount(): number {
  return ++React.useRef(0).current;
}
