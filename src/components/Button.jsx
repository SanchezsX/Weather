import cn from '@helpers/cn'

const Button = ({ children, className = '', isLoading, ...props }) => {
  return (
    <button
      className={cn(
        className,
        'flex shrink-0 justify-center items-center bg-blue-600 rounded-xl active:scale-95 hover:bg-blue-500 transition outline-none',
        typeof children === 'string' ? 'h-14 px-4' : 'w-14 h-14'
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className={cn("loader relative bg-white flex justify-center items-center w-[31px] h-[31px] rounded-full",
        "after:absolute after:bg-blue-600 after:w-[25px] after:h-[25px] after:rounded-full ",
        'before:absolute before:bottom-0 before:left-0 before:bg-blue-600 before:w-4 before:h-4 before:rounded-full')} ></div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
