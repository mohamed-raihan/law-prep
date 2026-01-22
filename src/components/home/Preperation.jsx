import Card from '../common/Card'

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <path
        d="M12 3 2.5 8l9.5 5 9.5-5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.5V16c0 .6.3 1.2.9 1.5C8.1 18.6 10 19.2 12 19.2s3.9-.6 5.6-1.7c.6-.3.9-.9.9-1.5v-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M21.5 9.2v6.3"
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
    title: 'Adaptive Virtual Classroom',
    paragraph:
      'Attend live online classes and access recorded sessions on a flexible digital platform, learn from NLU mentors anywhere, revisit concepts anytime, and stay supported through interactive sessions and online doubt resolution.'
  },
  {
    id: 2,
    title: 'All-India Test, Ranking & Analysis',
    paragraph:
      'Exam-oriented All-India mock and sectional tests with detailed solutions and structured performance analysis help students practice regularly, understand their strengths and gaps, and improve overall exam readiness.'
  },
  {
    id: 3,
    title: 'Personalized Guidance',
    paragraph:
      'Dedicated mentors provide personalized guidance, on-demand doubt clearing, and actionable feedback—helping students stay focused, clear concepts, make informed decisions, and prepare for law exams with confidence.'
  }
]

export default function Preperation() {
  return (
    <section className="mt-4">
      <div className="bg-white rounded-[28px] p-10 border border-[#E9E5E2]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center px-4 py-2 bg-[#F4F2F0] rounded-full text-sm text-[#666666] font-medium">
              Strategic Legal Training
            </span>
            <h2 className="mt-6 text-5xl md:text-6xl font-medium leading-[1.05] text-black">
              Designed for <br />
              Serious Preparation
            </h2>
          </div>

          <span className="max-w-2xl text-[#666666] text-[14px] md:text-[16px] text-justify lg:mt-3">
            Our law-prep blends exam-specific curriculum, consistent answer-writing practice, and
            expert-led analysis. We empower students to navigate the complexities of diverse legal
            entrances with a structured path designed for consistent growth and rank-boosting
            results.
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.id} className="bg-[#F4F2F0] rounded-[22px] p-1">
              <Card
                icon={<CapIcon />}
                title={c.title}
                paragraph={c.paragraph}
                backgroundColor="bg-white"
                width="w-full="
                paddingTop="pt-10"
                paddingBottom="pb-10"
                iconBgColor="bg-[#F3572A]"
                className="rounded-[20px] border border-[#E9E5E2]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

