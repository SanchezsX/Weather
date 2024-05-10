import cn from '../helpers/cn'

const SevenDays = ({ image, temp, date }) => {
  return (
    <div
      className={cn(
        'rounded-[60px] flex justify-evenly flex-col items-center',
        ' bg-[#181818] text-white w-[125px] border-[1px] border-white/5 mx-1',
        'max-md:h-[80%]'
      )}
    >
      <p className={cn('text-[18px] opacity-60', 'max-md:text-[14px] max-[580px]:text-[12px]')}>
        {date}
      </p>
      <div className="bg-white/10 w-[50%] h-[1px]"></div>
      <div
        className={cn(
          'w-[60px] h-[60px] relative',
          'max-md:w-[45px] max-md:h-[45px] max-[580px]:size-[40px]'
        )}
      >
        <img
          className="w-full h-full object-contain"
          src={`.${image}`}
          alt=""
        />
        <img
          className="w-full h-full object-contain absolute top-0 bottom-0 blur-[30px]"
          src={`.${image}`}
          alt=""
        />
      </div>
      <h3
        className={cn(
          'relative flex items-start text-[35px] font-semibold',
          "after:content-['°C'] after:tracking-wider after:text-xs after:opacity-60 after:font-normal",
          'max-md:text-[25px] max-[580px]:text-[20px]'
        )}
      >
        {temp}
      </h3>
    </div>
  )
}

export default SevenDays
