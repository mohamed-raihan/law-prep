import { useNavigate } from 'react-router-dom'
const examinations = [
  {
    id: 1,
    name: 'CLAT',
    fullName: 'Common Law Admission Test',
    logoBg: 'bg-blue-50',
    logo:"/clat.png",
    logoText: 'CLAT'
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
    name: 'CU LLB Entrance',
    fullName: 'Christ University LLB Entrance Exam, Bangalore',
    logoBg: 'bg-gray-50',
    logoText: 'CU',
    logo:"",
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
    fullName: 'Central University Entrance Test (UG)',
    logoBg: 'bg-green-50',
    logoText: 'CUET',
    logo:"/cuetug.png"
  }
]

export default function Examination() {
  const navigate = useNavigate()
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {examinations.map((exam) => (
          <div
            key={exam.id}
            className="relative h-64 perspective-1000 flip-card-container"
          >
            <div className="flip-card-inner">
              {/* Front of Card */}
              <div className="flip-card-front bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center">
                <img src={exam.logo} alt={exam.name} className="w-24 h-24 object-contain mb-4" />
                <h3 className="font-medium text-base mb-1 text-center">{exam.name}</h3>
                <p className="text-xs text-[#666666] text-center">{exam.fullName}</p>
              </div>

              {/* Back of Card - Only show if details exist */}
              {exam.details && (
                <div className="flip-card-back bg-white rounded-xl p-6 shadow-md border border-gray-100 overflow-y-auto">
                  <h3 className="font-medium text-lg mb-4 text-center">{exam.name}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-gray-800">Key Features</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-xs text-gray-700 mb-1">Exam Pattern</p>
                          <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
                            {exam.details.examPattern.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-xs text-gray-700 mb-1">Syllabus</p>
                          <ul className="list-disc list-inside space-y-1 text-xs text-gray-600">
                            {exam.details.syllabus.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-xs text-gray-700 mb-1">Exam Date</p>
                          <p className="text-xs text-gray-600">{exam.details.examDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
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

