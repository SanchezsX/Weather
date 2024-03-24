import Container from '@components/Container'

import { useEffect, useState } from 'react'
import cn from '../helpers/cn'

import MainForm from './subcomponents/MainForm'

import useGetHourlyWeather from '../hooks/useGetHourlyWeather'
import useGetCurrentWeather from '../hooks/useGetCurrentWeather'

import Content from './subcomponents/Content'

const Main = () => {
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [data, error, isLoading, fetching] = useGetCurrentWeather()
  const [hourlyData, hourlyError, hourlyIsLoading, hourlyFetching] =
    useGetHourlyWeather()

  const handleSubmit = async () => {
    fetching(value)
    hourlyFetching(value)

    setIsOpen(true)
  }

  useEffect(() => {
    if (!isOpen) setValue('')
  }, [isOpen])

  return (
    <Container
      width="1200px"
      className="h-[100svh] overflow-hidden"
    >
      <Container
        className={cn(
          'flex items-center py-12 transition-all duration-700',
          isOpen ? ' h-[25svh]' : 'h-full'
        )}
        width="520px"
      >
        <MainForm
          isLoading={isLoading}
          isOpen={isOpen}
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
          fetching={fetching}
          hourlyFetching={hourlyFetching}
          setIsOpen={setIsOpen}
        />
      </Container>
      <Content
        setIsOpen={setIsOpen}
        data={data}
        hourlyError={hourlyError}
        hourlyData={hourlyData}
        isLoading={isLoading}
        isOpen={isOpen}
      />
    </Container>
  )
}

export default Main
