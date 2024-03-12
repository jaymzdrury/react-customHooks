import useWindowSize from "../hooks/useWindowResize";
import MarginTop from "../ui/MarginTop";

export default function UseWindowSize(): JSX.Element {
  const { width, height } = useWindowSize();
  return (
    <MarginTop>
      width: {width}, height: {height}
    </MarginTop>
  );
}
