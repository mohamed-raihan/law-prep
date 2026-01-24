import { useNavigate } from 'react-router-dom'
export default function Hero() {
  const navigate = useNavigate()

  const handleCourseDetails = () => {
    const element = document.getElementById('preparation-meets-purpose')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-white flex items-center w-full py-16 rounded-[25px] mb-4">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-8">
            {/* Logo/Brand - Oval button with orange circle */}
            {/* <div className="inline-flex items-center border border-orange-300 rounded-full px-3 py-1.5 w-fit">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-400 mr-2.5"></div>
              <span className="text-sm font-medium text-gray-800">LawPrep360</span>
            </div> */}

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-left text-black leading-tight">
            Full-Spectrum<br />Coaching
            <br />
              <span className="text-orange-500">for Law Entrance <br /> Exams.</span>
            </h1>

            {/* Body Text */}
            <p className="text-[18px] text-[#666666] max-w-xl text-left">
              Your single destination for CLAT, AILET, and LSAT at Prep Academy. We've streamlined your preparation with logic-focused modules, real-time mock simulations, 24/7 mentorship, and All India Test Series designed to transform practice into performance.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button onClick={handleCourseDetails} className="px-6 py-3 bg-[#F4F2F0] text-black text-[14px] rounded-full font-medium hover:bg-gray-300 transition-colors">
                SEE COURSE DETAILS
              </button>
              <button onClick={() => navigate('/contact')} className="px-6 py-3 bg-[#F3572A] text-white rounded-full text-[14px] font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                APPLY FOR ADMISSION
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Character Illustration */}
          <div className="flex justify-center lg:justify-end items-center">
            <img 
              src="/heroprep.svg" 
              alt="LawPrep360 Character" 
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}