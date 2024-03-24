import { useState } from 'react'

const API_KEY = 'za4bUytPIFIUxMIYPFmY0Pa54XTtNQ3m'

const useGetHourlyWeather = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const hourlyFetching = async (location) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=hourly&apikey=${API_KEY}`,
        {
          headers: {
            'Accept-Language': 'en-EN',
          },
        }
      )
      const data = await response.json()
      setData(data)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }
  return [data, error, isLoading, hourlyFetching]
}

export default useGetHourlyWeather
