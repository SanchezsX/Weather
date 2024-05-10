import MaskIcons from '@components/MaskIcons'
import cn from '../helpers/cn'

const Card = ({ title, image, percent }) => {
  return (
    <div
      className={cn(
        'relative flex flex-col bg-[#181818] rounded-[16px] max-w-full p-10 ',
        'hover:bg-blue-600 transition duration-300 overflow-hidden border-[1px] border-white/5',
        "after:content-[''] after:absolute after:-right-8 after:-bottom-8 ",
        'after:bg-blue-500 after:w-28 after:h-28 after:rounded-full after:blur-[80px] after:opacity-50',
        'max-md:p-8 '
      )}
    >
      <div className="flex justify-between items-center gap-3 max-md:flex-col max-md:text-center">
        <h4 className="text-[18px] tracking-wider font-semibold">{title}</h4>
        <MaskIcons
        className="flex-shrink-0 flex max-md:hidden"
          width="22px"
          height="22px"
          path={image}
        />
      </div>
      <div className="flex justify-between items-center gap-3 mt-auto max-md:justify-center ">
        <h6 className="text-[20px] font-semibold">{percent}</h6>
      </div>
    </div>
  )
}

export default Card
