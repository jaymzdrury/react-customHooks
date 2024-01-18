import { Fragment } from 'react'
import {createState, useGlobalState} from '../hooks/useGlobalState'
import MarginTop from '../wrappers/MarginTop'

const COUNT = createState(0)

const Counter = () => {
    const [count, countSet] = useGlobalState(COUNT)
    return <Fragment>Count: {count} <button onClick={() => countSet(count+1)}>+</button></Fragment>
}
function UseGlobalState() {
  return (
    <MarginTop><Counter /><Counter /></MarginTop>
  )
}

export default UseGlobalState