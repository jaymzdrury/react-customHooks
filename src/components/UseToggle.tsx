import useToggle from '../hooks/useToggle'
import MarginTop from '../wrappers/MarginTop'

function UseToggle() {
    const [on, toggle] = useToggle(true)
    return <MarginTop>{on ? 'ON': 'OFF'}<br /><button onClick={toggle}>Toggle</button></MarginTop>
}

export default UseToggle