import {useState} from 'react'

function SetState() {
  const [state, _stateSet] = useState({
    counter: 0,
    counter2: 10
  })
  function stateSet(newState: object){
    _stateSet((oldState) => {
      return {
        ...oldState,
        ...newState
      }
    })
  }
  return <button onClick={() => stateSet({counter: state.counter + 1})}>{state.counter}{' '}{state.counter2}</button>
}

export default SetState