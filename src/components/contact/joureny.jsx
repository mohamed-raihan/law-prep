import Card from '../common/Card'

function CircularArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 8v4l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const journeyCards = [
  {
    id: 1,
    title: 'Structured Study Plans',
    paragraph:
      'A structured study plan built to ensure clear syllabus coverage and consistent progress.'
  },
  {
    id: 2,
    title: 'Learn at Your Own Pace',
    paragraph:
      'Access live sessions, recorded classes, and offline content anytime to match your schedule and learning style.'
  },
  {
    id: 3,
    title: 'Dedicated Student Support',
    paragraph:
      'Get guidance whenever you need it—from enrollment assistance to academic support throughout your journey.'
  }
]

export default function Journey() {
  return (
    <section className="my-4 bg-white rounded-[20px] md:rounded-[28px] p-6 md:p-8 lg:p-10">
      {/* Header */}
      <div className="mb-6 md:mb-8 lg:mb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
          <div className="flex-1">
            <span className="inline-block px-3 py-2 md:px-4 bg-[#F4F2F0] rounded-full text-xs md:text-sm text-black font-medium mb-3 md:mb-4">
              Structured Learning
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-black">
              Start Your Journey Today
            </h2>
          </div>
          <div className="flex-1 lg:max-w-lg">
            {/* <span className="text-sm text-[14px] md:text-[16px] text-[#666666]">
              Begin your preparation with a structured learning system designed to guide you at every step. With expert support, focused practice, and flexible learning options, you can move forward with confidence and clarity.
            </span> */}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {journeyCards.map((card) => (
          <Card
            key={card.id}
            icon={<CircularArrowIcon />}
            title={card.title}
            paragraph={card.paragraph}
            backgroundColor="bg-white"
            paddingTop="pt-6"
            paddingBottom="pb-6"
            width="w-full"
            iconBgColor="bg-[#F3572A]"
            className="shadow-sm"
          />
        ))}
      </div>
    </section>
  )
}

