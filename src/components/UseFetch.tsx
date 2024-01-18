import useFetch from '../hooks/useFetch'

function UseFetch() {
  const {loading, error, data} = useFetch('https://jsonplaceholder.typicode.com/users/1',{})
  return <h6>{loading ? 'Loading...' : error ? 'Error' : data.name}</h6>
}

export default UseFetch