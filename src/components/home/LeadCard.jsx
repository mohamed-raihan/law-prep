/**
 * Lead Section Card Component with Hover Expansion
 * @param {string} title - Card title/heading
 * @param {string} paragraph - Card description text
 * @param {string} image - Image path to display in the card
 * @param {Array<string>} expandedContent - Additional content to show on hover
 */
// export default function LeadCard({
//     title,
//     paragraph,
//     image,
//     expandedContent = []
//   }) {
//     return (
//       /* Container div keeps the space in the grid so the layout doesn't collapse */
//       <div className="relative w-full h-[400px] md:h-[450px]"> 
//         <div className="
//           absolute inset-0 z-10
//           group w-full bg-[#F4F2F0] rounded-[12px] md:rounded-[16px] p-6
//           transition-all duration-500 ease-out
//           hover:scale-[1.07] hover:z-50 hover:shadow-2xl hover:h-fit
//           overflow-hidden
//         ">
//           {image && (
//             <div className="mb-4 w-full">
//               <img 
//                 src={image} 
//                 alt={title} 
//                 className="w-full h-40 md:h-48 object-cover rounded-[12px]" 
//               />
//             </div>
//           )}
  
//           <div className="flex flex-col">
//             <h3 className="text-lg md:text-xl font-medium text-black mb-2">
//               {title}
//             </h3>
  
//             <p className="text-xs md:text-sm text-[#666666] leading-5">
//               {paragraph}
//             </p>
  
//             {/* Expanded Content */}
//             <div className="
//               mt-0 opacity-0 max-h-0 
//               group-hover:mt-6 group-hover:opacity-100 group-hover:max-h-[1000px] 
//               transition-all duration-500 ease-in-out
//             ">
//               <h4 className="text-base font-semibold text-black mb-3">Key Features:</h4>
//               <ul className="space-y-3">
//                 {expandedContent.map((item, index) => (
//                   <li key={index} className="text-xs md:text-sm text-[#666666] flex items-start">
//                     <span className="text-[#F3572A] mr-2">•</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

import { useState } from 'react';

export default function LeadCard({
    className,
    title,
    paragraph,
    image,
    expandedContent = []
  }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      /* 1. Ghost container keeps the grid layout stable */
      <div className={`relative w-full ${className}`}>
        
        {/* 2. The Card with Blur Logic: 
               - We blur this card if the PARENT grid is hovered (group-hover/main:blur-sm)
               - BUT we remove the blur if THIS card is hovered (hover:!blur-none) */}
        <div 
          onClick={handleToggle}
          className={`
            absolute inset-0 z-10
            group w-full bg-[#F4F2F0] rounded-[20px] p-6
            transition-all duration-500 ease-out
            group-hover/main:blur-sm hover:!blur-none 
            hover:scale-105 hover:z-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:h-fit
            flex flex-col overflow-hidden
            cursor-pointer
            ${isExpanded ? 'scale-105 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.2)] h-fit' : ''}
          `}
        >
          
          {/* Image - Slides up and fades out */}
          {image && (
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out
              max-h-56 opacity-100 mb-4
              group-hover:max-h-0 group-hover:opacity-0 group-hover:mb-0
              ${isExpanded ? 'max-h-0 opacity-0 mb-0' : ''}
            `}>
              <img 
                src={image} 
                alt={title} 
                className="w-full h-56 object-cover rounded-[12px]" 
              />
            </div>
          )}
  
          <div className="flex flex-col flex-grow">
            {/* Title - Adjusts weight on hover */}
            <h3 className="text-xl font-bold text-black mb-2 transition-all duration-300">
              {title}
            </h3>
  
            <p className="text-sm text-[#666666] leading-6">
              {paragraph}
            </p>
  
            {/* Expanded Content - Revealed when image is hidden */}
            <div className={`
              overflow-hidden transition-all duration-700 ease-in-out
              max-h-0 opacity-0
              group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:mt-6
              ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : ''}
            `}>
              <div className="h-[1px] bg-gray-300 w-full mb-4" />
              <h4 className="text-md font-bold text-[#F3572A] mb-3 uppercase tracking-wider">
                Key Features
              </h4>
              <ul className="space-y-4">
                {expandedContent.map((item, index) => (
                  <li key={index} className="text-[16px] text-[#444444] flex items-start animate-fadeIn">
                    <span className="text-[#F3572A] mr-3 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

