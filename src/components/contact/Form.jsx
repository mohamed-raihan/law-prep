import { useState } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      program: '',
      message: ''
    })
  }

  return (
    <section className="w-full my-4">
      <div className="bg-white rounded-[25px] p-6 sm:p-10 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Section - Promotional Content */}
          <div className="flex flex-col">
            {/* Mascot */}
            <div className="mb-6 lg:mb-8 max-w-xs lg:max-w-sm">
                <img src="/contactPrep.svg" alt="Mascot" />
            </div>

            {/* Enrollment Tag */}
            <div className="inline-block bg-[#F4F2F0] rounded-full px-4 py-2 mb-4 w-fit">
              <span className="text-sm font-medium text-black">Enrollment</span>
            </div>

            {/* Heading */}
            <h2 className="text-[36px] sm:text-[42px] lg:text-[56px] font-bold text-black leading-tight mb-4">
              Start Your Preparation with Confidence
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-[#666666] leading-relaxed max-w-lg">
              Enroll in a structured learning program designed to help you prepare effectively, track progress, and stay guided throughout your exam journey.
            </p>
          </div>

          {/* Right Section - Enrollment Form */}
          <div className="bg-[#F4F2F0] rounded-[20px] p-6 h-full">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="FIRST NAME"
                    className="w-full px-4 py-3 rounded-lg bg-white text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="LAST NAME"
                    className="w-full px-4 py-3 rounded-lg bg-white text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL ADDRESS"
                  className="w-full px-4 py-3 rounded-lg bg-white text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors"
                  required
                />
              </div>

              {/* Program of Interest */}
              <div>
                <input
                  type="text"
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  placeholder="PROGRAM OF INTEREST"
                  className="w-full px-4 py-3 rounded-lg bg-white text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors"
                  required
                />
              </div>

              {/* Additional Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ADDITIONAL MESSAGE"
                  rows="8"
                  className="w-full px-4 py-3 rounded-lg bg-white text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#F3572A] text-white rounded-lg text-[14px] font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors mt-2 "
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

