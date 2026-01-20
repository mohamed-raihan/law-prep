const examinations = [
  {
    id: 1,
    name: 'CLAT',
    fullName: 'CLAT (Common La...)',
    logoBg: 'bg-blue-50',
    logoText: 'CLAT'
  },
  {
    id: 2,
    name: 'AILET',
    fullName: 'AILET (All India Law...)',
    logoBg: 'bg-indigo-50',
    logoText: 'AILET'
  },
  {
    id: 3,
    name: 'LSAT—India',
    fullName: 'LSAT—India',
    logoBg: 'bg-blue-100',
    logoText: 'LSAT'
  },
  {
    id: 4,
    name: 'AILET PG',
    fullName: 'AILET PG',
    logoBg: 'bg-indigo-100',
    logoText: 'AILET PG'
  },
  {
    id: 5,
    name: 'Judicial Services Ex...',
    fullName: 'Judicial Services Ex...',
    logoBg: 'bg-gray-100',
    logoText: 'PCS-J'
  },
  {
    id: 6,
    name: 'APO',
    fullName: 'APO (Assistant Pros...)',
    logoBg: 'bg-red-50',
    logoText: 'APO'
  },
  {
    id: 7,
    name: 'AIBE',
    fullName: 'AIBE (All India Bar E...)',
    logoBg: 'bg-blue-900',
    logoText: 'AIBE',
    textColor: 'text-white'
  },
  {
    id: 8,
    name: 'DU LLB Entrance',
    fullName: 'DU LLB Entrance (vi...)',
    logoBg: 'bg-gray-50',
    logoText: 'DU'
  },
  {
    id: 9,
    name: 'SET / SLAT',
    fullName: 'SET / SLAT',
    logoBg: 'bg-blue-900',
    logoText: 'SLAT',
    textColor: 'text-white'
  },
  {
    id: 10,
    name: 'CUET-UG',
    fullName: 'CUET-UG (for Law P...)',
    logoBg: 'bg-green-50',
    logoText: 'CUET'
  }
]

export default function Examination() {
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {examinations.map((exam) => (
          <div
            key={exam.id}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100 flex flex-col items-center"
          >
            <div className={`w-16 h-16 ${exam.logoBg} rounded-lg flex items-center justify-center mb-4 ${exam.textColor || 'text-gray-800'}`}>
              <span className="text-xs font-bold">{exam.logoText}</span>
            </div>
            <h3 className="font-medium text-base mb-1 text-center">{exam.name}</h3>
            <p className="text-xs text-[#666666] text-center">{exam.fullName}</p>
          </div>
        ))}
      </div>

      {/* Chat Widget */}
      <div className="flex justify-center mt-8 ">
        <div className="bg-[#F4F2F0] rounded-[48px] p-4 flex items-center gap-3 max-w-md border border-gray-100 min-w-5xl">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center overflow-hidden border-2 border-[#F4F2F0] relative">
              <svg
                className="w-7 h-7 text-white"
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
          <div className="flex-1 min-w-0">
            <h3 className="text-[20px] text-black mb-0.5">
              <span className="font-bold">Hey,</span> 👋 I'm from the Prep Academy team.
            </h3>
            <p className="text-xs text-[#666666]">
              Happy to help you get started with your prep.
            </p>
          </div>
          <button className="bg-[#F3572A] text-white px-6 py-4 rounded-[48px] text-xs font-medium uppercase hover:bg-orange-600 transition-colors whitespace-nowrap flex-shrink-0">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  )
}

