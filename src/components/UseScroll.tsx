import useScroll from "../hooks/useScroll";
import MarginTop from "../ui/MarginTop";

export default function UseScroll() {
  const { scroll } = useScroll();
  return <MarginTop>scroll: {scroll}</MarginTop>;
}
