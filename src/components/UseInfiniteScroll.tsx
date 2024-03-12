import React from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

export default function UseInfiniteScroll(): JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null);
  const visible = useInfiniteScroll(ref, "-100px");

  return <div ref={ref}>It is {visible ? "Visible" : "Invisible"}</div>;
}
