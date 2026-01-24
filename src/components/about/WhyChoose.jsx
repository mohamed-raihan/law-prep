// Card Component
function FeatureCard({ number, title, description, backgroundColor = 'bg-white' }) {
  return (
    <div className={`${backgroundColor} rounded-[24px] px-6 py-8 shadow-sm`}>
      <h1 className="text-[48px] sm:text-[56px] font-bold text-[#F3572A] mb-3">
        {number}
      </h1>
      <h3 className="text-[18px] sm:text-[20px] font-bold text-black mb-4">
        {title}
      </h3>
      <p className="text-[14px] sm:text-[15px] text-[#666666] leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default function WhyChoose() {
  // Feature cards data
  const featuresData = [
    {
      number: 1,
      title: "Clear direction at every stage",
      description: "Every course follows a well-defined learning path aligned with exam requirements, helping students progress step by step without confusion or guesswork.",
      backgroundColor: "bg-[#F4F2F0]"
    },
    {
      number: 2,
      title: "Guidance that keeps you on track",
      description: "Learn from experienced mentors who provide concept clarity, exam strategies, and timely doubt resolution throughout your preparation journey.",
      backgroundColor: "bg-[#F4F2F0]"
    },
    {
      number: 3,
      title: "Learn at your pace, anytime",
      description: "Access live sessions, recorded classes, and offline content designed to fit different learning styles and schedules without compromising consistency.",
      backgroundColor: "bg-[#F4F2F0]"
    },
    {
      number: 4,
      title: "Know where you stand and how to improve",
      description: "Detailed analysis after every test highlights strengths, weak areas, and progress, allowing students to focus their efforts where it matters most.",
      backgroundColor: "bg-[#F4F2F0]"
    }
  ]

  return (
    <section className="w-full my-4 grid grid-cols-1 xl:grid-cols-2 gap-4 bg-white rounded-[25px] p-10">
      {/* Title Section */}
      <div className="flex flex-col xl:justify-between gap-4">
        <div className="mb-8">
          {/* <div className="inline-block bg-[#F4F2F0] rounded-full px-4 py-2 mb-3">
            <span className="text-sm font-medium text-black">Why</span>
          </div> */}
          <h2 className="text-[42px] sm:text-[56px] lg:text-[64px] font-bold text-black leading-tight">
            Why Choose Us
          </h2>
        </div>

        <div className="flex justify-center">
          <img src="/whyChoosePrep 1.svg" alt="Why Choose Us" className="w-auto h-[400px] object-cover" />
        </div>

        {/* Quote Section */}
        <div className="max-w-2xl">
          <blockquote className="text-[18px] sm:text-[20px] font-bold italic text-black leading-relaxed mb-3">
            "Consistency and clarity matter more than intensity. When students understand what to study and why, progress follows naturally."
          </blockquote>
          {/* <p className="text-[14px] sm:text-[15px] text-[#666666]">
            Mentor, Prep Academy
          </p> */}
        </div>
      </div>

      {/* Four Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.number}
            number={feature.number}
            title={feature.title}
            description={feature.description}
            backgroundColor={feature.backgroundColor}
          />
        ))}
      </div>
    </section>
  )
}

