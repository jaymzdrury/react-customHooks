import useRendersCount from "../hooks/useRendersCount";
import MarginTop from "../ui/MarginTop";

export default function UseRendersCount(): JSX.Element {
  const rendersCount = useRendersCount();
  return <MarginTop>renders: {rendersCount}</MarginTop>;
}
