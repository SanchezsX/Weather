import MaskIcons from '@components/MaskIcons'
import cn from '../helpers/cn'

const Card = ({ title, image, percent }) => {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-between bg-[#181818] rounded-[16px] max-w-full p-10 ',
        'hover:bg-blue-600 transition duration-300 overflow-hidden border-[1px] border-white/5',
        "after:content-[''] after:absolute after:-right-8 after:-bottom-8 ",
        'after:bg-blue-500 after:w-28 after:h-28 after:rounded-full after:blur-[80px] after:opacity-50'
      )}
    >
      <div className="flex justify-between items-center gap-3">
        <h4 className="text-[18px] tracking-wider font-semibold">{title}</h4>
        <MaskIcons
          width="22px"
          height="22px"
          path={image}
        />
      </div>
      <div className="flex justify-between items-center gap-3">
        <h6 className="text-[20px] font-semibold">{percent}</h6>
      </div>
    </div>
  )
}

export default Card
