import { useState, useEffect, useRef } from 'react'

const mentors = [
  {
    id: 1,
    name: 'Janaki Devi Bhaskar',
    title: 'Tamil Nadu National Law University ',
    detailedTitle: 'Tamil Nadu National Law University ',
    image: '/janakiDevi.png',
    bio: '• NLU graduate with an LL.M. in Criminal and Securities Law, blending strong academics with hands-on policy experience.\n\n• Deeply interested in how law, society, and economics come together to create fair, inclusive, and sustainable systems.\n\n• As a mentor, brings clarity and perspective, helping students see law not just as a career, but as a tool to create meaningful change.'
  },
  {
    id: 2,
    name: 'Ayushi Singh Tomar',
    title: ['National Law University, ', 'Tripura Agartala'],
    detailedTitle: 'National Law University, Tripura Agartala',
    image: '/ayushiSingh.png',
    bio: '• Legal academic and researcher, currently pursuing a Ph.D. at NLU Tripura, with a strong focus on concepts and research-driven learning.\n\n• Passionate about helping students build clear fundamentals, analytical thinking, and confidence in legal studies.\n\n• As a mentor, believes in structured guidance and critical thinking, enabling students to approach exams and law with clarity and precision.'
  },
  {
    id: 3,
    name: 'Dr. Sunandini',
    title: ['Dharmashastra National', 'Law University, Jabalpur'],
    detailedTitle: 'Dharmashastra National Law University, Jabalpur',
    image: '/Dr.Sunandini.png',
    bio: '• Legal academic and researcher with a Ph.D. in Law and an LL.M. in Access to Justice, bringing strong academic depth to her work.\n\n• Deeply engaged with issues of gender justice, public policy, governance, and national security, informed by real-world research experience.\n\n• As a mentor, encourages students to see law as a practical tool for justice and systemic change, grounded in real social contexts.'
  },
  {
    id: 4,
    name: 'Priyanka Nair',
    title: ['National Law University', 'Delhi'],
    detailedTitle: 'National Law University, Delhi',
    image: '/priyankaNair.png', 
    bio: '• Legal professional and academic with experience across criminal justice, business laws, and legal practice, supported by strong academic training.\n\n• An Advocate enrolled with the Bar Council of Delhi, bringing practical courtroom and real-world legal insight into teaching and mentoring.\n\n• As a mentor, helps students build clear concepts, structured thinking, and strategic reasoning, connecting theory with real legal application.'
  },
  {
    id: 5,
    name: 'Mohammed Shahzad',
    title: ['National Law University', 'Odisha'],
    detailedTitle: 'National Law University, Odisha',
    image: '/mohammedShahzad.png',
    bio: '• Legal academic and researcher, currently pursuing a Ph.D. in Law at NLU Odisha, with a strong interest in corporate and commercial law.\n\n• Known for a concept-driven and analytical approach, grounded in rigorous research and academic clarity.\n\n• As a mentor, focuses on building strong fundamentals and research-oriented thinking, helping students develop depth and confidence in law.'
  }
]

export default function Experts() {
  const [selectedMentor, setSelectedMentor] = useState(mentors[0])
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef(null)

  // Auto-switch mentors every 3 seconds
  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setSelectedMentor((prev) => {
          const currentIndex = mentors.findIndex((m) => m.id === prev.id)
          const nextIndex = (currentIndex + 1) % mentors.length
          return mentors[nextIndex]
        })
      }, 3000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovering])

  return (
    <div className="mb-4">
      <div className="bg-white rounded-[25px] p-4 sm:p-6 md:p-8 lg:p-10 mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 sm:mb-8 md:mb-12 gap-4 sm:gap-6">
          <div className="flex-1">
            <span className="inline-block px-3 sm:px-4 py-1.5 bg-[#F4F2F0] rounded-full text-xs sm:text-sm text-[#666666] font-medium mb-3 sm:mb-4">
              Mentors
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
              Meet <br className="hidden sm:block" /> Our Experts
            </h2>
          </div>
          {/* <div className="flex-1 max-w-2xl mt-3">
            <span className="text-base sm:text-lg md:text-[16px] text-[#666666] font-regular">
              Guided by the best in the field: Our mentors are NLU graduates and senior law professionals who bring firsthand experience and tested strategies to your prep and the deep understanding needed to excel in CLAT, AILET, LSAT, and beyond.
            </span>
          </div> */}
        </div>

        {/* Mentor Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              onClick={() => setSelectedMentor(mentor)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                selectedMentor.id === mentor.id ? 'scale-105' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-2 sm:mb-3 md:mb-4 border-2 sm:border-3 md:border-4 transition-all duration-300 ${
                  selectedMentor.id === mentor.id
                    ? 'border-gray-800 shadow-lg'
                    : 'border-transparent hover:border-gray-400'
                }`}
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-center mb-1 max-w-[120px] sm:max-w-[150px] md:max-w-none">
                {mentor.name}
              </h3>
              <span className="text-xs sm:text-sm text-gray-600 text-center max-w-[120px] sm:max-w-[150px] md:max-w-none">
                {Array.isArray(mentor.title) ? (
                  <>
                    {mentor.title[0]}
                    <br />
                    {mentor.title[1]}
                  </>
                ) : (
                  mentor.title
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Detailed Mentor Card */}
        <div 
          className="bg-white rounded-[25px] p-4 sm:p-6 md:p-8 lg:p-12 border-3 border-gray-100"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Mentor Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src={selectedMentor.image}
                  alt={selectedMentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mentor Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4">
                {selectedMentor.name}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
                {selectedMentor.detailedTitle}
              </p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p className="whitespace-pre-line">{selectedMentor.bio}</p>
                {/* <p>{selectedMentor.bio}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
