import { useState } from 'react'

const API_KEY = 'F4A4xWkLqg6YAf4Te2W5Lqs1sWW3RKhJ'

const useGetCurrentWeather = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetching = async (location) => {
    setIsLoading(true)

    try {
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${API_KEY}`,
        {
          headers: {
            'Accept-Language': 'en-EN',
          },
        }
      )
      const data = await response.json()
      setData(data)
      console.log(data)
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return [data, error, isLoading, fetching]
}

export default useGetCurrentWeather
