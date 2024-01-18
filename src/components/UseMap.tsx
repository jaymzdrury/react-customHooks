import MarginTop from "../wrappers/MarginTop"
import useMap from '../hooks/useMap'

function UseMap(){
    const { array, set, push, remove, filter, update, clear, reset} = useMap(['1', '2', '3', '4', '5', '6'])

    return (
        <MarginTop>
            <div>{array.join(", ")}</div>
            <button onClick={() => push('7')}>Add</button>
            <button onClick={() => update(1, '9')}>Change</button>
            <button onClick={() => remove(1)}>Remove</button>
            <button onClick={() => filter(n => n < 3)}>Filter</button>
            <button onClick={() => set(['1', '2'])}>Set</button>
            <button onClick={clear}>Clear</button>
            <button onClick={reset}>Reset</button>
        </MarginTop>
    )
}

export default UseMap