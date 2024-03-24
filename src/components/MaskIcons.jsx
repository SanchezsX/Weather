import cn from '../helpers/cn'

const MaskIcons = ({ path, width, height, color = '#FFF', className }) => {
  return (
    <div
      className={cn(className, 'icon')}
      style={{
        maskImage: `url(.${path})`,
        width,
        height,
        backgroundColor: color,
      }}
    ></div>
  )
}

export default MaskIcons
