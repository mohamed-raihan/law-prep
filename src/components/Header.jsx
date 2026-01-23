import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="w-full pt-4 sm:pt-6 md:pt-8 pb-2 sm:pb-3 md:pb-4">
      <div className="w-full bg-white rounded-[25px] px-4 sm:px-6 md:px-8 flex flex-row justify-between items-center gap-3 sm:gap-4 shadow-sm relative">
        <div className="flex-shrink-0">
            <img src="/prep-logo.svg" alt="logo" className="w-16 h-16 sm:w-24 sm:h-24" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-4 sm:gap-6 md:gap-8 items-center flex-wrap justify-center sm:justify-end">
          <a href="/" className="text-black no-underline text-xs sm:text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000] whitespace-nowrap">HOME</a>
          <a href="/about" className="text-black no-underline text-xs sm:text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000] whitespace-nowrap">ABOUT US</a>
          {/* <a href="/blog" className="text-black no-underline text-xs sm:text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000] whitespace-nowrap">BLOG</a> */}
          <a href="/contact" className="text-black no-underline text-xs sm:text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000] whitespace-nowrap">CONTACT US</a>
        </nav>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden absolute top-full left-0 right-0 bg-white rounded-b-[25px] shadow-lg border-t border-gray-100 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 max-h-96 mt-2'
              : 'opacity-0 max-h-0 mt-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col py-4">
            <a
              href="/"
              onClick={closeMobileMenu}
              className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000] hover:bg-gray-50 px-6 py-3"
            >
              HOME
            </a>
            <a
              href="/about"
              onClick={closeMobileMenu}
              className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000] hover:bg-gray-50 px-6 py-3"
            >
              ABOUT US
            </a>
            {/* <a
              href="/blog"
              onClick={closeMobileMenu}
              className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000] hover:bg-gray-50 px-6 py-3"
            >
              BLOG
            </a> */}
            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000] hover:bg-gray-50 px-6 py-3"
            >
              CONTACT US
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

