export default function Statistics() {
  return (
    <section className="w-full my-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: 10+ Years */}
        <div className="bg-white rounded-[25px] px-6 py-8 shadow-sm">
          <h1 className="text-[48px] sm:text-[56px] font-bold text-[#F3572A] mb-3">
            10+
          </h1>
          <h3 className="text-[18px] sm:text-[20px] font-bold text-black mb-4">
            Years of Trusted Guidance
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#666666] leading-relaxed">
            Helping students prepare for competitive exams with the right strategy, structured learning, and expert-led guidance at every stage.
          </p>
        </div>

        {/* Card 2: 50,000+ Students */}
        <div className="bg-white rounded-[25px] px-6 py-8 shadow-sm">
          <h1 className="text-[48px] sm:text-[56px] font-bold text-[#F3572A] mb-3">
            50,000+
          </h1>
          <h3 className="text-[18px] sm:text-[20px] font-bold text-black mb-4">
            Students Mentored
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#666666] leading-relaxed">
            Learners across India have used Prep Academy's courses, tests, and performance tools to improve their preparation.
          </p>
        </div>

        {/* Card 3: 95% Satisfaction */}
        <div className="bg-white rounded-[25px] px-6 py-8 shadow-sm">
          <h1 className="text-[48px] sm:text-[56px] font-bold text-[#F3572A] mb-3">
            95%
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#666666] leading-relaxed mt-7">
            Students value our structured approach, clarity in learning, and continuous support.
          </p>
        </div>
      </div>
    </section>
  )
}

