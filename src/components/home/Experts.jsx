import { useState, useEffect, useRef } from 'react'

const mentors = [
  {
    id: 1,
    name: 'Janaki Devi Bhaskar',
    title: 'Symbiosis Law School',
    detailedTitle: 'Senior Law Mentor (CLAT & AILET)',
    image: '/janakiDevi.png',
    bio: 'Janaki Devi Bhaskar is a legal researcher and policy professional whose work sits at the intersection of law, justice, and sustainable development. An NLU graduate with an LL.M. in Criminal and Securities Law, she brings a strong academic foundation combined with a sharp focus on real-world policy impact. Janaki’s approach is rooted in intersectionality understanding how law, society, and economics interact to shape fair and inclusive systems. Alongside this, she believes that education reform and economic self-sufficiency are essential pillars for building empowered, dignified, and resilient communities. As a mentor, Janaki with her experience and strategistic approach brings clarity, purpose, and perspective encouraging our students to see law not just as a profession, but as a powerful tool for structural change.'
  },
  {
    id: 2,
    name: 'Ayushi Singh Tomar',
    title: ['National Law University, ', 'Tripura Agartala'],
    detailedTitle: 'Senior Law Mentor (CLAT & LSAT)',
    image: '/ayushiSingh.png',
    bio: 'Aayushi Singh Tomar is a legal academic and researcher currently pursuing her Ph.D. at National Law University, Tripura (Agartala). With a strong academic orientation, she brings a research-driven and concept-focused approach to legal education. As a mentor, Aayushi is committed to helping students build conceptual clarity, analytical thinking, and a strong foundational understanding of law. Her mentoring style emphasizes structured learning and strategic preparation, enabling learners to approach competitive exams and legal studies with confidence and academic rigour.She believes in guiding students not just to learn, but to think critically, reason effectively, and apply legal concepts with precision skills that are essential for long-term success in the legal field.'
  },
  {
    id: 3,
    name: 'Dr. Sunandini',
    title: ['Dharmashastra National', 'Law University, Jabalpur'],
    detailedTitle: 'Senior Law Mentor (AILET & LSAT)',
    image: '/Dr.Sunandini.png',
    bio: 'Dr. Sunandini is a legal academic and researcher with a Ph.D. in Law from Dharmashastra National Law University and an LL.M. in Access to Justice from Tata Institute of Social Sciences. Her academic work explores the intersection of gender justice, public policy, internal security, and law, with a strong emphasis on justice delivery and governance systems. Through a field-informed research approach, Dr. Sunandini bridges legal theory with real-world policy challenges, particularly in areas impacting national security and marginalised communities. she brings a deeply informed and nuanced perspective on conflict, law, and society, enriching her teaching and mentorship with lived context and critical insight. As a mentor, she encourages our students to view law not only as an academic discipline, but as a practical and transformative tool for governance, equity, and systemic reform.'
  },
  {
    id: 4,
    name: 'Priyanka Nair',
    title: ['National Law University', 'Delhi'],
    detailedTitle: 'Senior Law Mentor (CLAT & AILET)',
    image: '/priyankaNair.png', 
    bio: 'Priyanka Nair is a legal professional and academic with a strong foundation across criminal justice, business laws, and legal practice. She holds a Bachelor of Laws (LL.B.) from Kerala Law Academy Law College, Thiruvananthapuram, and a Master of Laws (LL.M.) in Business Laws from National Law University, Delhi. She further pursued her Ph.D. in Criminal Justice / Law Enforcement Administration from Hidayatullah National Law University, reflecting her deep academic engagement with justice systems, enforcement mechanisms, and criminal law frameworks. Priyanka is enrolled as an Advocate with the Bar Council of Delhi, bringing practical legal insight into her academic and mentoring work. Known for her critical thinking and analytical skills, she guides our students to approach law with clarity, structure, and strategic reasoning bridging doctrinal understanding with real-world legal application. As a mentor, she focuses on building strong conceptual foundations while helping students develop the critical skills required for legal studies, research, and professional practice.'
  },
  {
    id: 5,
    name: 'Mohammed Shahzad',
    title: ['National Law University', 'Odisha'],
    detailedTitle: 'Senior Law Mentor (CLAT, AILET & LSAT)',
    image: '/mohammedShahzad.png',
    bio: 'Mohammed Shahzad Shafi is a legal academic with a strong academic grounding in corporate, commercial, and doctrinal legal studies. His academic journey reflects a commitment to excellence in legal scholarship and student mentorship. He is currently pursuing his Ph.D. in Law at National Law University, Odisha, where his research reflects a deep engagement with contemporary legal frameworks and evolving regulatory landscapes. Known for his academic excellence and analytical depth, his doctoral research is rooted in rigorous scholarship, critical inquiry, and a commitment to advancing legal understanding. As a mentor, Mohammed Shahzad Shafi brings a structured, concept-driven approach to legal education. He focuses on helping students build strong fundamentals, analytical clarity, and academic depth, with a particular emphasis on legal research as a core professional skill.'
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
            <div className="flex-1 flex flex-col">
              <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4">
                {selectedMentor.name}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
                {selectedMentor.detailedTitle}
              </p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>{selectedMentor.bio}</p>
                {/* <p>{selectedMentor.bio}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
