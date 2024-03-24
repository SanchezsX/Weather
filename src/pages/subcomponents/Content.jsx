import cn from '../../helpers/cn'
import SevenDays from '../../components/SevenDays'
import Card from '../../components/Card'
import MainCard from './MainCard'
import getWeatherIcon from '../../helpers/getWeatherIcon'

const Content = ({
  setIsOpen,
  data,
  hourlyData,
  hourlyError,
  isLoading,
  isOpen,
}) => {
  const values = data?.data?.values
  const nextHours = hourlyData?.timelines?.hourly?.slice(2, 8)

  return (
    <>
      {!isLoading && isOpen && (
        <div
          className={cn(
            'w-full  h-[50vh] rounded-[16px] transition delay-200',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="block bg-white w-1/6 h-1 rounded-full mx-auto opacity-80 hover:opacity-100 transition mb-6"
          ></button>
          {!data.data || hourlyError ? (
            <div className="w-[80%] h-[80%] bg-[#151515] rounded-[18px] mx-auto">
              <div className="flex flex-col h-full justify-center gap-5 text-center w-[60%] mx-auto">
                <img
                  className="w-[50px] h-[50px] mx-auto mb-8"
                  src="/icons/false-icons.svg"
                  alt=""
                />
                <h1 className="text-3xl font-bold">Couldn't find the city</h1>
                <h4 className="opacity-50">
                  Try again, or you entered the name of the city incorrectly. If
                  you are doing everything right, contact support.
                </h4>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 grid-rows-[200px,1fr] h-full gap-5">
              <MainCard data={data} />
              <Card
                title="Visibility"
                image="/icons/visible.svg"
                percent={`${values?.visibility}%`}
              />
              <Card
                title="Wind Status"
                image="/icons/wind.svg"
                percent={`${values?.windSpeed}km.h`}
              />
              <Card
                title="Humidity"
                image="/icons/droplet.svg"
                percent={`${values?.humidity}%`}
              />
              <div className=" col-span-3 rounded-[16px] flex justify-between">
                {nextHours?.map((item, i) => (
                  <SevenDays
                    key={i}
                    image={getWeatherIcon(item.values.weatherCode)}
                    date={item.time
                      .match(/T(\d{2}:\d{2}:\d{2})Z/)[1]
                      .split(':')
                      .slice(0, 2)
                      .join(':')}
                    temp={Math.round(item.values.temperature)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Content
