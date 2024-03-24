import MaskIcons from '@components/MaskIcons'
import { useEffect, useState } from 'react'
import cn from '../../helpers/cn'
import getWeatherIcon from '../../helpers/getWeatherIcon'

const MainCard = ({ data }) => {
  const [isDay, setIsDay] = useState(true)

  const values = data?.data?.values
  const location = data?.location?.name

  const split = location?.split(', ')
  const shortName = `${split[0]}, ${split[split.length - 1]}`

  const timeZone = data?.data?.time
  const temp = values?.temperature
  const formatted = Math.floor(temp)

  useEffect(() => {
    if (toString(values.weatherCode).split('')[4] == 1) {
      setIsDay(false)
    }
  }, [])

  return (
    <div
      className={cn(
        'relative rounded-[18px] row-span-2 p-8 border-soli',
        isDay
          ? 'bg-gradient-to-b from-blue-600  to-blue-400'
          : 'bg-gradient-to-b from-blue-800 to-blue-950 after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-1/2 '
      )}
    >
      <div className="flex flex-col justify-between h-full gap-4">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[120px] h-[120px]">
            <img
              className="w-full h-full object-contain"
              src={getWeatherIcon(values.weatherCode)}
              alt="item"
            />
          </div>
          <h3 className="text-[60px] font-semibold leading-3 my-2 ">
            {formatted}°
          </h3>
        </div>
        <div className="flex flex-col gap-8">
          <div className="mx-auto bg-white/10 h-[1px] w-[80%] my-2"></div>
          <p className="flex gap-2 text-[16px] items-center">
            <MaskIcons
              width="24px"
              height="24px"
              path="/icons/location.svg"
            />
            {shortName}
          </p>
          <p className="flex gap-2 text-[16px] items-center">
            <MaskIcons
              width="24px"
              height="24px"
              path="/icons/data.svg"
            />
            {timeZone.replace(/T(\d{2}:\d{2}:\d{2})Z/, ' $1')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainCard
