import cn from '../helpers/cn'

const Container = ({ children, width = '100%', className }) => {
  return (
    <div
      style={{ maxWidth: width }}
      className={cn('mx-auto px-4', className)}
    >
      {children}
    </div>
  )
}

export default Container
