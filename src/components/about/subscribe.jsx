import { useState } from 'react'

export default function Subscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Subscribing with email:', email)
    setEmail('')
  }

  return (
    <section className="w-full my-4">
      <div className="bg-white rounded-[25px] px-6 sm:px-10 lg:px-16 py-10 sm:py-12 shadow-sm">
        {/* Subscribe Tag */}
        <div className="inline-block bg-[#F4F2F0] rounded-full px-4 py-2 mb-4">
          <span className="text-sm font-medium text-black">Subscribe</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[42px] sm:text-[56px] lg:text-[64px] font-bold text-black leading-tight mb-4">
          Subscribe to Our
          <br />
          Newsletter
        </h2>

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] text-[#666666] mb-6 max-w-2xl leading-relaxed">
          Get updates on courses, exam notifications, preparation tips, and important announcements, delivered straight to your inbox.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL ADDRESS"
              className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#F3572A] text-white rounded-lg text-[14px] font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  )
}

