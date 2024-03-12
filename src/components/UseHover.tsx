import useHover from "../hooks/useHover";
import MarginTop from "../ui/MarginTop";

export default function UseHover(): JSX.Element {
  const { callbackRef, isHovering } = useHover();

  return (
    <MarginTop>
      <div ref={callbackRef}>{isHovering ? "Hovering" : "Not Hovering"}</div>
    </MarginTop>
  );
}
