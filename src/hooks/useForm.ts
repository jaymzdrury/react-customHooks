import { useState, ChangeEvent, FormEvent } from "react"

function useForm() {
  const [formData, formDataSet] = useState({name: '', password: ''})
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => formDataSet({...formData, [e.target.name]: e.target.value})
  const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      formDataSet({name: '', password: ''})
  }
  return {formData, handleInputChange, handleSubmit, formDataSet}
}

export default useForm