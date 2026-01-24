import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const examinations = [
  {
    id: 1,
    name: 'CLAT',
    fullName: 'Common Law Admission Test',
    logoBg: 'bg-blue-50',
    logo:"/clat.png",
    logoText: 'CLAT',
    details: {
      examPattern: [
        'Conducted by the Consortium of NLUs',
        '120 MCQs | Duration: 120 minutes',
        'Sections: English, GK & Current Affairs, Legal Reasoning, Logical Reasoning, Quantitative Techniques',
        '+1 for correct answers, -0.25 for incorrect answers'
      ],
      syllabus: [
        'English: Reading comprehension & language skills',
        'GK & CA: National & international current affairs',
        'Legal Reasoning: Passage-based legal questions',
        'Logical Reasoning: Critical & analytical reasoning',
        'Quantitative Techniques: Basic maths & interpretation'
      ],
      examDate: 'Conducted once a year, usually in December'
    }
  },
  {
    id: 2,
    name: 'AILET',
    fullName: 'All India Law Entrance Test',
    logoBg: 'bg-indigo-50',
    logoText: 'AILET',
    logo:"/ailet.png",
    details: {
      examPattern: [
        'Conducted by NLU Delhi',
        '120 MCQs | Duration: 120 minutes',
        'Sections: English, GK, Legal, Logical, Quantitative',
        '+1 for correct answers, -0.25 for incorrect answers'
      ],
      syllabus: [
        'English: Comprehension, vocabulary',
        'GK: Current affairs & static GK',
        'Legal Reasoning: Principle-based passages',
        'Logical Reasoning: Arguments & analysis',
        'Quantitative Aptitude: Basic maths & data interpretation'
      ],
      examDate: 'Held once a year, usually in December'
    }
  },
  {
    id: 3,
    name: 'AILET PG',
    fullName: 'All India Law Entrance Test (PG)',
    logoBg: 'bg-indigo-100',
    logoText: 'AILET PG',
    logo:"/ailet1.png",
    details: {
      examPattern: [
        'Conducted by NLU Delhi',
        '100 Objective MCQs | Duration: 120 minutes',
        'Questions based on core law subjects',
        '+1 for correct answers, -0.25 for incorrect answers'
      ],
      syllabus: [
        'Constitutional Law',
        'Criminal Law',
        'Contract Law',
        'Jurisprudence',
        'Torts, Property & other core subjects'
      ],
      examDate: 'Conducted once a year, usually in December'
    }
  },
  {
    id: 4,
    name: 'Christ University LLB Entrance',
    fullName: 'Christ University LLB Entrance Exam',
    logoBg: 'bg-gray-50',
    logoText: 'CU',
    logo:"/cullb.jpeg",
    details: {
      examPattern: [
        'Conducted by Christ (Deemed to be University)',
        '120 MCQs | Duration: 120 minutes',
        'Sections: English, General Knowledge, Logical Reasoning, Legal Aptitude, Data Analysis',
        '+1 for correct answers, -0.25 for incorrect answers'
      ],
      syllabus: [
        'English: Comprehension, grammar, vocabulary',
        'General Knowledge: Current affairs & static GK',
        'Legal Aptitude: Legal awareness, principles, application',
        'Logical Reasoning: Critical & analytical reasoning',
        'Data Analysis: Basic quantitative interpretation'
      ],
      examDate: 'Conducted in multiple phases'
    }
  },
  {
    id: 5,
    name: 'SLAT',
    fullName: 'Symbiosis Law Entrance Test',
    logoBg: 'bg-blue-900',
    logoText: 'SLAT',
    logo:"/slat.png",
    textColor: 'text-white',
    details: {
      examPattern: [
        'Conducted by Symbiosis International University',
        '60 MCQs | Duration: 60 minutes',
        'Sections: Logical Reasoning, Legal Reasoning, Analytical Reasoning, Reading Comprehension',
        'No negative marking'
      ],
      syllabus: [
        'Logical & Analytical Reasoning: Patterns, arguments, decision-making',
        'Legal Reasoning: Legal principles and application',
        'Reading Comprehension: Passages, inference, vocabulary'
      ],
      examDate: 'Usually conducted in December (multiple slots)'
    }
  },
  {
    id: 6,
    name: 'CUET-UG',
    fullName: 'Common University Entrance Test (UG)',
    logoBg: 'bg-green-50',
    logoText: 'CUET',
    logo:"/cuetug.png",
    details: {
      examPattern: [
        'Conducted by the National Testing Agency (NTA)',
        'Computer-based test (CBT)',
        'Sections: Language, Domain Subjects, General Test (as per university/course)',
        'MCQ format | Duration varies by sections chosen',
        '+5 for correct answers, -1 for incorrect answers, and 0 for unattempted questions'
      ],
      syllabus: [
        'Language: Reading comprehension, grammar, vocabulary',
        'General Test: GK, current affairs, logical & quantitative reasoning',
        'Domain Subjects: As per selected subjects for the law program'
      ],
      examDate: 'Conducted once a year, usually between May 11 to May 31, 2026'
    }
  }
]

export default function Examination() {
  const navigate = useNavigate()
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpanded = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }
  return (
    <div className="relative bg-white rounded-[25px] p-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 bg-[#F4F2F0] rounded-full text-sm text-[#666666] font-medium mb-4">
          Examinations
        </span>
        <h2 className="text-4xl md:text-5xl font-medium">
          Examinations <br /> We Prepare You For
        </h2>
      </div>

      {/* Examinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 card-grid-container">
        {examinations.map((exam) => {
          const isExpanded = expandedId === exam.id
          return (
          /* 2. Ghost wrapper: Keeps the grid layout fixed while the card grows */
          <div key={exam.id} className="relative h-64 w-full">
            
            <div
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              onClick={() => toggleExpanded(exam.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleExpanded(exam.id)
                }
                if (e.key === 'Escape') setExpandedId(null)
              }}
              className={`
                examination-card absolute inset-0 z-10 cursor-pointer select-none
                bg-white rounded-2xl p-6 border border-gray-100
                flex flex-col overflow-hidden group
                hover:z-50 hover:scale-[1.15] hover:shadow-2xl hover:h-[450px]
                origin-center border border-gray-200
                ${isExpanded ? 'z-50 scale-[1.15] shadow-2xl h-[450px]' : ''}
              `}
            >
              
              {/* Image Section - Visible by default, moves up on hover */}
              <div
                className={`
                  flex flex-col items-center justify-center transition-all duration-500 group-hover:mb-4
                  ${isExpanded ? 'mb-4' : ''}
                `}
              >
                <img 
                  src={exam.logo} 
                  alt={exam.name} 
                  className={`
                    w-20 h-20 object-contain mb-2 transition-transform group-hover:scale-75
                    ${isExpanded ? 'scale-75' : ''}
                  `}
                />
                <h3 className="font-bold text-base text-center">{exam.name}</h3>
                <p className={`text-[10px] text-[#666666] text-center group-hover:hidden ${isExpanded ? 'hidden' : ''}`}>
                  {exam.fullName}
                </p>
              </div>

              {/* 3. Details Section - Height 0 by default, expands on hover */}
              <div
                className={`
                  opacity-0 max-h-0 overflow-y-auto transition-all duration-500 delay-100
                  group-hover:opacity-100 group-hover:max-h-[300px] scrollbar-hide
                  ${isExpanded ? 'opacity-100 max-h-[300px]' : ''}
                `}
              >
                <div className="h-[1px] bg-gray-100 my-3" />
                
                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-bold text-[10px] text-[#F3572A] uppercase">Exam Pattern</p>
                    <ul className="space-y-4 mt-1">
                      {exam.details.examPattern.map((item, idx) => (
                        <li key={idx} className="text-[16px] text-[#444444] flex items-start">
                          <span className="text-[#F3572A] mr-3 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-bold text-[10px] text-[#F3572A] uppercase">Syllabus</p>
                    <ul className="space-y-4 mt-1">
                      {exam.details.syllabus.map((item, idx) => (
                        <li key={idx} className="text-[16px] text-[#444444] flex items-start">
                          <span className="text-[#F3572A] mr-3 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="">
                    <p className="font-bold text-[10px] text-[#F3572A] uppercase">Exam Date</p>
                    <span className="text-[16px] text-gray-600">{exam.details.examDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </div>

      {/* Chat Widget */}
      <div className="flex justify-center mt-6 md:mt-8">
        <div className="bg-[#F4F2F0] rounded-2xl md:rounded-[48px] p-3 md:p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full md:max-w-[80%] border border-gray-100">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-600 flex items-center justify-center overflow-hidden border-2 border-[#F4F2F0] relative">
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="text-base sm:text-lg md:text-[20px] text-black mb-0.5">
              <span className="font-bold">Hey,</span> 👋 I'm from the Prep Academy team.
            </h3>
            <p className="text-xs text-[#666666]">
              Happy to help you get started with your prep.
            </p>
          </div>
          <button 
            onClick={() => navigate('/contact')} 
            className="bg-[#F3572A] text-white px-4 py-2 sm:px-6 sm:py-3 md:py-4 rounded-2xl sm:rounded-[48px] text-xs font-medium uppercase hover:bg-orange-600 transition-colors whitespace-nowrap flex-shrink-0 w-full sm:w-auto"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  )
}

