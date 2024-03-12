import useForm from "../hooks/useForm";
import MarginTop from "../ui/MarginTop";

export default function UseForm(): JSX.Element {
  const { formData, handleInputChange, handleSubmit } = useForm();
  const { name, password } = formData;

  return (
    <MarginTop>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </MarginTop>
  );
}
