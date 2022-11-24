import useToggle from '../hooks/useToggle'
import Box from '../wrappers/Box'

function UseToggle() {
    const [on, toggle] = useToggle(true)
  return <Box>{on ? 'ON': 'OFF'}<br /><button onClick={toggle}>Toggle</button></Box>
}

export default UseToggle