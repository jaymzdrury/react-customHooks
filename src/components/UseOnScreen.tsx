import { useRef } from "react"
import useOnScreen from "../hooks/useOnScreen"

function UseOnScreen(){
    const thisRef = useRef<HTMLDivElement | null>(null)
    const visible = useOnScreen(thisRef, "-100px")

    return <div ref={thisRef}>It is {visible ? 'Visible' : 'Invisible'}</div>
}

export default UseOnScreen