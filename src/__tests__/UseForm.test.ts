import {renderHook, act} from '@testing-library/react'
import useForm from '../hooks/useForm'

test('useForm returns formData', () => {
    const {result} = renderHook(() => useForm())
    expect(result.current.formData).toEqual({name: '', password: ''})
})

test('useForm handles onChange', () => {
    const {result} = renderHook(() => useForm())
    act(() => result.current.formDataSet({...result.current.formData, ["name"]: 'James'}))
    expect(result.current.formData).toEqual({name: 'James', password: ''})
    act(() => result.current.formDataSet({...result.current.formData, ["password"]: '1234'}))
    expect(result.current.formData).toEqual({name: 'James', password: '1234'})
})