export default function Header() {
  return (
    <div className="w-full pt-8 pb-4">
      <div className="w-full bg-white rounded-[25px] px-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
        <div>
            <img src="/prep-logo.svg" alt="logo" className="w-20 h-20" />
        </div>
        <nav className="flex gap-8 items-center flex-wrap justify-center">
          <a href="/" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">HOME</a>
          <a href="/about" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">ABOUT US</a>
          <a href="/blog" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">BLOG</a>
          <a href="/contact" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">CONTACT US</a>
        </nav>
      </div>
    </div>
  )
}

