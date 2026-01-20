import Card from '../common/Card'

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7h8M8 11h8M8 15h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

const cards = [
  {
    id: 1,
    title: 'Topic-Focused Learning & Practice',
    paragraph:
      'Topic-wise practice questions, curated study material, and legal reasoning workbooks are designed around the latest exam pattern to help students build strong fundamentals, identify weak areas, and progress step by step with accuracy.'
  },
  {
    id: 2,
    title: 'All India full-Length Mock Tests',
    paragraph:
      'All-India, full-length mock tests replicate real exam patterns, difficulty, and time pressure—helping students experience actual exam conditions and benchmark their performance against national-level competition.'
  },
  {
    id: 3,
    title: 'Mentor Guidance & Doubt Support',
    paragraph:
      'Dedicated mentorship and regular doubt-clearing sessions provide continuous academic support, ensuring students clearly understand legal concepts, stay on track, and prepare with confidence.'
  },
  {
    id: 4,
    title: 'Performance Review & Analysis',
    paragraph:
      'Each mock test is followed by detailed, AI-backed analysis that tracks accuracy, speed, and time management, helping students identify gaps, discover scoring opportunities, and improve overall exam readiness.'
  },
  {
    id: 5,
    title: 'Expert-Curated Learning Resources',
    paragraph:
      'Access expertly curated study materials, structured notes, and exhaustive legal reasoning workbooks—aligned with the latest exam patterns—to simplify complex concepts and support effective, consistent revision.'
  },
  {
    id: 6,
    title: 'Topic-Wise Practice & Sectional Tests',
    paragraph:
      'Topic-wise practice and focused sectional tests help students strengthen fundamentals, improve accuracy, identify weak areas, and progress step by step toward advanced exam readiness.'
  }
]

export default function Lead() {
  return (
    <section className="my-4 bg-white rounded-[20px] md:rounded-[28px] p-6 md:p-8 lg:p-10">
      {/* Header */}
      <div className="mb-6 md:mb-8 lg:mb-10">
        <span className="inline-block px-3 py-1.5 md:px-4 bg-[#F4F2F0] rounded-full text-xs md:text-sm text-[#666666] font-medium mb-3 md:mb-4">
          Our Specializations
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-black">
          Everything You Need to Lead
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            icon={<BookIcon />}
            title={card.title}
            paragraph={card.paragraph}
            backgroundColor="bg-[#F4F2F0]"
            paddingTop={index < 3 ? 'pt-8 md:pt-12 lg:pt-40' : 'pt-6'}
            paddingBottom="pb-6"
            width="w-full"
            iconBgColor="bg-[#F3572A]"
            className=""
          />
        ))}
      </div>
    </section>
  )
}

