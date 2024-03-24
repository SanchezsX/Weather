import { useState } from 'react'

const useLocation = () => {
  const [isLoading, setIsLoading] = useState(true)

  function getting() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      })
    } catch (err) {
      alert(err)
    } finally {
      setIsLoading(false)
    }
  }

  return [coords, isLoading, getting]
}

export default useLocation
