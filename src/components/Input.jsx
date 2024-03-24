import cn from '@helpers/cn'
import MaskIcons from './MaskIcons'
import { useState } from 'react'

const Input = ({ className, iconPath, setValue, value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative flex w-full items-center h-14 ">
      {iconPath && (
        <MaskIcons
          className={cn(
            'absolute left-3 transition z-20',
            isFocused || value ? 'opacity-100' : 'opacity-30'
          )}
          color="white"
          width="28px"
          height="28px"
          path={iconPath}
        />
      )}
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          'w-full bg-[#161616] h-full border border-white/5 rounded-xl px-4 outline-none placeholder:text-white/30 ',
          iconPath ? 'pl-11' : '',
          className
        )}
        {...props}
      />
    </div>
  )
}

export default Input
