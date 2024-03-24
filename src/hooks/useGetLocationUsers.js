import { useEffect, useState } from 'react'

const API_KEY = 'pk.bfb901573df1094574b608e2a063777f'

const useGetLocationUsers = () => {
  const [locationUsers, setLocationUsers] = useState({})
  const [errorLocation, setErrorLocation] = useState('')
  const [coords, setCoords] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    })
  }, [])

  useEffect(() => {
    if (coords.lat && coords.lon) {
      fetchingLocation()
    }
  }, [coords])

  const fetchingLocation = async () => {
    try {
      console.log('@try', coords)
      const response = await fetch(
        `https://us1.locationiq.com/v1/reverse?lat=${coords.lat}&lon=${coords.lon}&format=json&key=${API_KEY}`,
        {
          headers: {
            'Accept-Language': 'en-EN',
          },
        }
      )
      const dataLocation = await response.json()

      setLocationUsers(dataLocation)
    } catch (err) {
      setErrorLocation(err)
    }
  }
  return [locationUsers, errorLocation, fetchingLocation]
}

export default useGetLocationUsers
