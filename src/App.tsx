import SetState from './components/SetState'
import UseCounter from './components/UseCounter';
import UseDebounce from './components/UseDebounce';
import UseFetch from './components/UseFetch'
import UseHover from './components/UseHover';
import UseInterval from './components/UseInterval';
import UseLocalStorage from './components/UseLocalStorage';
import UseRendersCount from './components/UseRendersCount';
import UseScroll from './components/UseScroll';
import UseToggle from './components/UseToggle';
import UseWindowSize from './components/UseWindowSize';
import useEffectOnce from './hooks/useEffectOnce';

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
    </>
  )
}

export default App;
