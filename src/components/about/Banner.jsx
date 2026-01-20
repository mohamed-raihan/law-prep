export default function Banner() {
  return (
    <section className="w-full">
      <div className="w-full bg-white rounded-[25px] px-6 sm:px-10 lg:px-16 py-14 sm:py-16 shadow-sm mb-4">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
          <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-bold text-black leading-[1.05] tracking-[-0.02em]">
            Built by Educators.
            <br />
            Driven by Purpose.
          </h1>

          <p className="mt-6 text-[16px] sm:text-[17px] text-[#7A7A7A] max-w-4xl leading-relaxed">
            Prep Academy is an education-focused platform driven by a clear mission to help students navigate competitive
            exams with clarity, confidence, and direction. We believe the right guidance can transform aspiration into
            achievement. Through structured learning, performance-driven insights with our experienced faculty, we support
            students at every stage of their journey.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-[#F3572A] text-white rounded-full text-[13px] font-semibold tracking-wide hover:bg-orange-600 transition-colors">
              CONTACT US
            </button>
            <button className="px-8 py-3 bg-[#F4F2F0] text-black rounded-full text-[13px] font-semibold tracking-wide hover:bg-gray-200 transition-colors">
              REQUEST A CALL BACK
            </button>
          </div>

          <div className="mt-12 flex justify-center w-full">
            <img
              src="/aboutPrep.svg"
              alt="Prep Academy Character"
              className="w-full max-w-[520px] h-auto select-none"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

