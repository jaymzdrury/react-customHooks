import LoadedImage from "./components/LoadedImage";
import UseCounter from "./components/UseCounter";
import UseDebounce from "./components/UseDebounce";
import UseFetch from "./components/UseFetch";
import UseForm from "./components/UseForm";
import UseGlobalState from "./components/UseGlobalState";
import UseHover from "./components/UseHover";
import UseInterval from "./components/UseInterval";
import UseLocalStorage from "./components/UseLocalStorage";
import UseMap from "./components/UseMap";
import UseRendersCount from "./components/UseRendersCount";
import UseScroll from "./components/UseScroll";
import UseToggle from "./components/UseToggle";
import UseWindowSize from "./components/UseWindowResize";
import UseOnScreen from "./components/UseInfiniteScroll";

function App(): JSX.Element {
  return (
    <>
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
      <LoadedImage
        alt="IMG"
        style={{ height: 30 }}
        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
      />
      <UseOnScreen />
    </>
  );
}

export default App;
