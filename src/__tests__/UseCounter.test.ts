import {renderHook, act} from '@testing-library/react'
import useCounter from '../hooks/useCounter'

test('useCounter returns right value', () => {
    const {result} = renderHook(() => useCounter(0))
    expect(result.current.value).toEqual(0)
})

test('useCounter increments', () => {
    const {result} = renderHook(() => useCounter(0))
    act(() => result.current.increment())
    expect(result.current.value).toEqual(1)
})

test('useCounter decrements', () => {
    const {result} = renderHook(() => useCounter(1))
    act(() => result.current.decrement())
    expect(result.current.value).toEqual(0)
})

test('useCounter resets', () => {
    const {result} = renderHook(() => useCounter(9))
    act(() => result.current.decrement())
    expect(result.current.value).toEqual(8)
    act(() => result.current.reset())
    expect(result.current.value).toEqual(9)
})