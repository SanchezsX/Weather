import MaskIcons from '@components/MaskIcons'
import Input from '@components/Input'
import Button from '@components/Button'
import cn from '../../helpers/cn'
import useGetLocationUsers from '../../hooks/useGetLocationUsers'

const MainForm = ({
  isOpen,
  setValue,
  value,
  handleSubmit,
  isLoading,
  fetching,
  hourlyFetching,
  setIsOpen,
}) => {
  const [locationUsers] = useGetLocationUsers()

  const city = locationUsers?.address?.city
  const country = locationUsers?.address?.country

  const onLocationClick = () => {
    setValue(city)
    fetching(city)
    hourlyFetching(city)
    setIsOpen(true)
  }

  return (
    <div
      className={cn(
        'w-full flex flex-col gap-4 transition ',
        isOpen
          ? 'opacity-50 pointer-events-none'
          : 'opacity-100 pointer-events-all'
      )}
    >
      {locationUsers?.address && (
        <button
          href=""
          onClick={onLocationClick}
          className="group location flex items-center tracking-wider"
        >
          <MaskIcons
            width="24px"
            height="24px"
            path="/icons/location.svg"
          />
          <h4 className="pl-[10px] pr-[6px]">{country},</h4>
          <p className="opacity-60 mr-1">{city}</p>
          <MaskIcons
            width="20px"
            height="20px"
            path="/icons/arrow-right.svg"
            className="group-hover:translate-x-1 group-hover:opacity-100 opacity-60 transition"
          />
        </button>
      )}
      <form
        className="w-full flex gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          value={value}
          setValue={setValue}
          iconPath="/icons/search.svg"
          placeholder="Search"
        />
        <Button
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          <MaskIcons
            width="28px"
            height="28px"
            path="/icons/arrow-left.svg"
          />
        </Button>
      </form>
    </div>
  )
}

export default MainForm
