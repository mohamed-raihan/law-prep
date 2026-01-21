/**
 * Reusable Card Component
 * @param {ReactNode|string} icon - Icon component, SVG, or image path
 * @param {string} title - Card title/heading
 * @param {string} paragraph - Card description text
 * @param {string} image - Image path to display in the card
 * @param {string} backgroundColor - Tailwind background color class (default: 'bg-white')
 * @param {string} paddingTop - Tailwind padding top class (default: 'pt-6')
 * @param {string} paddingBottom - Tailwind padding bottom class (default: 'pb-6')
 * @param {string} width - Tailwind width class (default: 'w-full')
 * @param {string} iconBgColor - Tailwind background color for icon container (default: 'bg-[#F3572A]')
 * @param {string} className - Additional CSS classes
 */
export default function Card({
  icon,
  title,
  paragraph,
  image,
  backgroundColor = 'bg-white',
  paddingTop = 'pt-6',
  paddingBottom = 'pb-6',
  width = 'w-full',
  iconBgColor = 'bg-[#F3572A]',
  className = ''
}) {
  return (
    <div className={`${width} ${backgroundColor} rounded-[12px] md:rounded-[16px] ${paddingTop} ${paddingBottom} px-4 md:px-5 lg:px-6 ${className} h-full`}>
      
      {image && (
        <div className="mb-4 md:mb-5 w-full">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-[12px] md:rounded-[16px]" 
          />
        </div>
      )}
      
      {/* Icon */}
      {icon && (
        <div className="mb-3 md:mb-4">
          <div className={`w-10 h-10 md:w-12 md:h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}>
            {typeof icon === 'string' ? (
              <img src={icon} alt="" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            ) : (
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-white">
                {icon}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="">
        {/* Title */}
      {title && (
        <h3 className="text-lg md:text-xl font-medium text-black mb-2 md:mb-3 text-left">
          {title}
        </h3>
      )}

      {/* Paragraph */}
      {paragraph && (
        <p className="text-xs md:text-sm text-[#666666] leading-5 md:leading-6 text-left">
          {paragraph}
        </p>
      )}
      </div>
    </div>
  )
}

