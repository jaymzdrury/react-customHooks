import useForm from '../hooks/useForm'
import MarginTop from '../wrappers/MarginTop'

function UseForm() {
  const {formData, handleInputChange, handleSubmit} = useForm()
  const {name, password} = formData

  return (
    <MarginTop>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} name='name' onChange={handleInputChange} />
        <input type='password' value={password} name='password' onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
    </MarginTop>
  )
}

export default UseForm