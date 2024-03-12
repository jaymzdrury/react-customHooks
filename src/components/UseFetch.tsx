import useFetch from "../hooks/useFetch";

export default function UseFetch(): JSX.Element {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {}
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return <h6>{data.name}</h6>;
}
