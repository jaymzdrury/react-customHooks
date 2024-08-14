import useGlobalState from "../hooks/useGlobalState";
import MarginTop from "../ui/MarginTop";

function Counter(): JSX.Element {
  const [count, countSet] = useGlobalState();
  return (
    <>
      Count: {count} <button onClick={() => countSet(count + 1)}>+</button>
    </>
  );
}
export default function UseGlobalState(): JSX.Element {
  return (
    <MarginTop>
      <Counter />
      <Counter />
    </MarginTop>
  );
}
