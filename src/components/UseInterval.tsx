import useInterval from '../hooks/useInterval'
import { useState } from 'react'

function UseInterval() {
    const [count, countSet] = useState(0)
    const [running, runningSet] = useState(true)
    useInterval(() => countSet(count+1), running ? 1000 : null)
    
    return (
        <><h1>{count}</h1><button onClick={() => runningSet(prev => !prev)}>{running ? 'STOP' : 'START'}</button></>
    )
}

export default UseInterval