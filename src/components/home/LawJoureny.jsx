import { useNavigate } from 'react-router-dom'

export default function LawJoureny() {
  const navigate = useNavigate()

  return (
    <section className="my-4">
      <div className="bg-white rounded-[28px] p-8 md:p-12 border border-[#E9E5E2]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-[#F4F2F0] rounded-full text-xs md:text-sm text-[#666666] font-medium">
            Get in Touch
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
            Ready to Start Your <br className="hidden sm:block" />
            Legal Journey?
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Have questions about law entrance exams, courses, or your preparation strategy? Our team is here to guide you
            with the right information and help you choose the most effective path for your target exam and goals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-[#F3572A] text-white rounded-full text-[14px] font-medium hover:bg-orange-600 transition-colors uppercase cursor-pointer"
            >
              Apply for Admission 
            </button>

            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-[#F4F2F0] text-black rounded-full text-[14px] font-medium hover:bg-gray-200 transition-colors uppercase"
            >
              REQUEST A CALL BACK
            </button>
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src="/jourenyPrep.svg"
              alt="Contact illustration"
              className="w-full max-w-xl h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


