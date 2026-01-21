import { useMemo, useState } from 'react'

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#666666]" aria-hidden="true">
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#666666]" aria-hidden="true">
      <path d="M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Faq() {
  const items = useMemo(
    () => [
      {
        q: 'Which law entrance exams does LawPrep360 prepare students for?',
        a: 'LawPrep360 prepares students for major law entrance exams including CLAT, AILET, and LSAT India. The courses are designed to match the exam pattern and difficulty level of each test.'
      },
      {
        q: 'Are the classes live, recorded, or offline?',
        a: 'We offer live classes along with recorded session access for revision. Select programs also include offline classroom options depending on your city and batch availability.'
      },
      {
        q: 'How does the personalized performance analysis work?',
        a: 'After each mock/sectional test, you get detailed analysis on accuracy, time spent, topic-wise strengths, and improvement areas—so you can optimize your preparation with clear next steps.'
      },
      {
        q: 'Will I get mentor support and doubt clearing?',
        a: 'Yes. Our mentors support you with regular doubt-clearing, strategy guidance, and performance reviews to keep you on track throughout your preparation journey.'
      },
      {
        q: 'Can beginners with no prior law background join?',
        a: 'Absolutely. Our programs start from fundamentals and gradually build up to exam-level difficulty, making them suitable for beginners as well as repeaters.'
      },
      {
        q: 'How do you keep students updated on Legal Current Affairs?',
        a: 'We provide curated legal current affairs updates, weekly digests, practice sets, and discussion sessions—helping you stay exam-ready with consistent revision.'
      }
    ],
    []
  )

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="my-4">
      <div className="bg-white rounded-[28px] p-8 md:p-12 border border-[#E9E5E2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#F4F2F0] rounded-full text-xs md:text-sm text-[#666666] font-medium">
              Have Questions?
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
              Frequently Asked <br />
              Questions
            </h2>

            <p className="mt-4 text-sm md:text-base text-[#666666] leading-relaxed max-w-xl">
              Find answers to common questions about law entrance exams, courses, and preparation. If you need more
              clarity, our academic team is always here to guide you.
            </p>

            <div className="mt-10">
              <img
                src="/faqPrep.svg"
                alt="FAQ illustration"
                className="w-full max-w-xl h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-4">
            {items.map((item, idx) => {
              const isOpen = idx === openIndex
              return (
                <div
                  key={item.q}
                  className="border border-[#E9E5E2] rounded-[18px] bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[16px] md:text-[17px] font-medium text-black leading-snug">
                      {item.q}
                    </span>
                    <span className="shrink-0">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 -mt-2">
                      <p className="text-sm md:text-base text-[#666666] leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}