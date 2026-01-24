import { useState } from 'react'
import { axiosInstance } from '../../services/axios'
import { API_URL } from '../../services/api_url'

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axiosInstance.post(API_URL.CONTACT_US, formData)
      console.log('Response:', response)
      alert('Form submitted successfully')
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        message: ''
      })
    } catch (error) {
      alert('Error submitting form')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full my-4">
      <div className="bg-white rounded-[25px] p-6 sm:p-10 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Section - Promotional Content */}
          <div className="flex flex-col h-full">
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
          <div className="bg-[#F4F2F0] rounded-[20px] p-6 h-full flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-4 sm:gap-5">
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="FIRST NAME"
                    className="w-full px-4 py-3 rounded-lg bg-white text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
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
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="PHONE NUMBER"
                  className="w-full px-4 py-3 rounded-lg bg-white text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors"
                  required
                />
              </div>

              {/* Additional Message */}
              <div className="flex flex-col flex-1">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ADDITIONAL MESSAGE"
                  className="w-full flex-1 min-h-[160px] px-4 py-3 rounded-lg bg-white text-[14px] text-black placeholder:text-[#999999] placeholder:uppercase focus:outline-none focus:border-[#F3572A] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-[#F3572A] text-white rounded-lg text-[14px] font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors mt-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

