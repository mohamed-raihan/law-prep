import { useState } from 'react'

const mentors = [
  {
    id: 1,
    name: 'Janaki Devi Bhaskar',
    title: 'Senior Law Mentor',
    detailedTitle: 'Senior Law Mentor (CLAT & AILET)',
    image: '/janakiDevi.png',
    bio: 'Janaki Devi Bhaskar is a legal researcher and policy professional whose work sits at the intersection of law, justice, and sustainable development. An NLU graduate with an LL.M. in Criminal and Securities Law, she brings a strong academic foundation combined with a sharp focus on real-world policy impact. Janaki’s approach is rooted in intersectionality understanding how law, society, and economics interact to shape fair and inclusive systems. Alongside this, she believes that education reform and economic self-sufficiency are essential pillars for building empowered, dignified, and resilient communities. As a mentor, Janaki with her experience and strategistic approach brings clarity, purpose, and perspective encouraging our students to see law not just as a profession, but as a powerful tool for structural change.'
  },
  {
    id: 2,
    name: 'Ayushi Singh Tomar',
    title: 'Senior Law Mentor',
    detailedTitle: 'Senior Law Mentor (CLAT & LSAT)',
    image: '/ayushiSingh.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    name: 'Dr. Sunandini',
    title: 'Senior Law Mentor',
    detailedTitle: 'Senior Law Mentor (AILET & LSAT)',
    image: '/Dr.Sunandini.png',
    bio: 'Dr. Sunandini is a legal academic and researcher with a Ph.D. in Law from Dharmashastra National Law University and an LL.M. in Access to Justice from Tata Institute of Social Sciences. Her academic work explores the intersection of gender justice, public policy, internal security, and law, with a strong emphasis on justice delivery and governance systems. Through a field-informed research approach, Dr. Sunandini bridges legal theory with real-world policy challenges, particularly in areas impacting national security and marginalised communities. she brings a deeply informed and nuanced perspective on conflict, law, and society, enriching her teaching and mentorship with lived context and critical insight. As a mentor, she encourages our students to view law not only as an academic discipline, but as a practical and transformative tool for governance, equity, and systemic reform.'
  },
  {
    id: 4,
    name: 'Priyanka Nair',
    title: 'Senior Law Mentor',
    detailedTitle: 'Senior Law Mentor (CLAT & AILET)',
    image: '/priyankaNair.png',
    bio: 'Priyanka Nair is a legal professional and academic with a strong foundation across criminal justice, business laws, and legal practice. She holds a Bachelor of Laws (LL.B.) from Kerala Law Academy Law College, Thiruvananthapuram, and a Master of Laws (LL.M.) in Business Laws from National Law University, Delhi. She further pursued her Ph.D. in Criminal Justice / Law Enforcement Administration from Hidayatullah National Law University, reflecting her deep academic engagement with justice systems, enforcement mechanisms, and criminal law frameworks. Priyanka is enrolled as an Advocate with the Bar Council of Delhi, bringing practical legal insight into her academic and mentoring work. Known for her critical thinking and analytical skills, she guides our students to approach law with clarity, structure, and strategic reasoning bridging doctrinal understanding with real-world legal application. As a mentor, she focuses on building strong conceptual foundations while helping students develop the critical skills required for legal studies, research, and professional practice.'
  },
  {
    id: 5,
    name: 'Mohammed Shahzad',
    title: 'Senior Law Mentor',
    detailedTitle: 'Senior Law Mentor (CLAT, AILET & LSAT)',
    image: '/mohammedShahzad.png',
    bio: 'Mohammed Shahzad Shafi is a legal academic with a strong academic grounding in corporate, commercial, and doctrinal legal studies. He holds a Bachelor of Laws (LL.B.) from Government Law College, Kozhikode and a Master of Laws (LL.M.) in Corporate and Commercial Law from Christ University, Bangalore. He is currently pursuing his Ph.D. in Law at National Law University, Odisha, where his research reflects a deep engagement with contemporary legal frameworks and evolving regulatory landscapes. As a mentor, Mohammed Shahzad Shafi brings a structured, concept-driven approach to legal education. He focuses on helping students build strong fundamentals, analytical clarity, and academic depth, with a particular emphasis on legal research as a core professional skill.'
  }
]

export default function Experts() {
  const [selectedMentor, setSelectedMentor] = useState(mentors[0])

  return (
    <div className="mb-4">
      <div className="bg-white rounded-[25px] p-10 mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6">
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 bg-[#F4F2F0] rounded-full text-sm text-[#666666] font-medium mb-4">
              Mentors
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Meet <br /> Our Experts
            </h2>
          </div>
          <div className="flex-1 max-w-2xl">
            <p className="text-[20px] text-[#666666] font-regular">
              Guided by the best in the field: Our mentors are NLU graduates and senior law professionals who bring firsthand experience and tested strategies to your prep and the deep understanding needed to excel in CLAT, AILET, LSAT, and beyond.
            </p>
          </div>
        </div>

        {/* Mentor Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              onClick={() => setSelectedMentor(mentor)}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                selectedMentor.id === mentor.id ? 'scale-105' : 'hover:scale-105'
              }`}
            >
              <div
                className={`w-32 h-32 rounded-full overflow-hidden mb-4 border-4 transition-all duration-300 ${
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
              <h3 className="text-lg font-medium text-center mb-1">
                {mentor.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {mentor.title}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Mentor Card */}
        <div className="bg-white rounded-[25px] p-8 md:p-12 border-3 border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Mentor Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden">
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
              <h3 className="text-3xl md:text-4xl font-medium mb-4">
                {selectedMentor.name}
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                {selectedMentor.detailedTitle}
              </p>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
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
