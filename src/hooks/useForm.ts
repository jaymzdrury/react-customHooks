import React from "react";

export default function useForm() {
  const [formData, formDataSet] = React.useState({ name: "", password: "" });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    formDataSet({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formDataSet({ name: "", password: "" });
  };
  return { formData, handleInputChange, handleSubmit, formDataSet };
}
