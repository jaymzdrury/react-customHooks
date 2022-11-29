import {renderHook, act} from '@testing-library/react'
import useHover from '../hooks/useHover'

test('useHover starts not hovering',() => {
    const {result} = renderHook(() => useHover())
    expect(result.current.isHovering).toBe(false)
})
test('isHovering when mouseOver fires',() => {
    const {result} = renderHook(() => useHover())
    act(() => result.current.handleMouseOver())
    expect(result.current.isHovering).toBe(true)
})
test('not hovering when mouse moves away', () => {
    const {result} = renderHook(() => useHover())
    act(() => result.current.handleMouseOut())
    expect(result.current.isHovering).toBe(false)
})