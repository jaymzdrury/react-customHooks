import {useState, useEffect} from 'react'

function useFetch(url: string, options: object) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null)
    const [data, setData] = useState({name: ''})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options)
                const data = await response.json()

                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    },[url,options])

    return {data, loading, error}
}

export default useFetch