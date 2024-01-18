import LoadedImage from "./components/LoadedImage"
import SetState from "./components/SetState"
import UseCounter from "./components/UseCounter"
import UseDebounce from "./components/UseDebounce"
import UseFetch from "./components/UseFetch"
import UseForm from "./components/UseForm"
import UseGlobalState from "./components/UseGlobalState"
import UseHover from "./components/UseHover"
import UseInterval from "./components/UseInterval"
import UseLocalStorage from "./components/UseLocalStorage"
import UseMap from "./components/UseMap"
import UseRendersCount from "./components/UseRendersCount"
import UseScroll from "./components/UseScroll"
import UseToggle from "./components/UseToggle"
import UseWindowSize from "./components/UseWindowResize"
import useEffectOnce from "./hooks/useEffectOnce"
import UseOnScreen from "./components/UseOnScreen"

function App() {
  useEffectOnce(() => console.log('useEffect ran once'))
  
  return (
    <>
      <SetState />
      <UseFetch />
      <UseLocalStorage />
      <UseCounter />
      <UseDebounce />
      <UseHover />
      <UseRendersCount />
      <UseInterval />
      <UseScroll />
      <UseToggle />
      <UseWindowSize />
      <UseForm />
      <UseMap />
      <UseGlobalState />
      <LoadedImage src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM='  />
      <UseOnScreen />
    </>
  )
}

export default App
