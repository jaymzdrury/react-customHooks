import useToggle from "../hooks/useToggle";
import MarginTop from "../ui/MarginTop";

export default function UseToggle(): JSX.Element {
  const [on, toggle] = useToggle(true);
  return (
    <MarginTop>
      {on ? "ON" : "OFF"}
      <br />
      <button onClick={toggle}>Toggle</button>
    </MarginTop>
  );
}
