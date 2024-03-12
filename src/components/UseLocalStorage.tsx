import useLocalStorage from "../hooks/useLocalStorage";
export default function UseLocalStorage(): JSX.Element {
  const [token, tokenSet] = useLocalStorage("localStorage", "");

  return (
    <>
      <label>localStorage: {token}</label>
      <br />
      <input
        type="text"
        value={token}
        onChange={(e) => tokenSet(e.target.value)}
      />
    </>
  );
}
