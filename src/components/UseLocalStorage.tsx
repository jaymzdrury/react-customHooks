import useLocalStorage from "../hooks/useLocalStorage"
function UseLocalStorage() {
  const [token, tokenSet] = useLocalStorage('localStorage', '')
  
  return (
    <>
      <label>localStorage: {token}</label>
      <br />
      <input type='text' value={token} onChange={(e) => tokenSet(e.target.value)} />
    </>
  )
}

export default UseLocalStorage