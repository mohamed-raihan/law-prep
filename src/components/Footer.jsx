export default function Footer() {
    return (
        <footer className="w-full pb-10">
            <div className="w-full bg-white rounded-[25px] px-10 py-10 shadow-sm">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className="max-w-md">
                        <img src="/prep-logo.svg" alt="Prep Academy" className="w-28 h-auto" />

                        <div className="mt-6 space-y-2 text-[#8A8A8A]">
                            <p className="m-0">Pukalakkat Complex, Mahakavi Vailoppilli Rd,</p>
                            <p className="m-0">Palarivattom, Kochi, 682025</p>
                        </div>

                        <div className="mt-6 space-y-2 text-[#8A8A8A]">
                            <p className="m-0">3rd Floor Alamparabil Building,</p>
                            <p className="m-0">TK Road, Thiruvalla, Kerala</p>
                        </div>

                        <div className="mt-8 space-y-2 text-[#8A8A8A]">
                            <p className="m-0">+91 94460 56789</p>
                            <p className="m-0">support@prepacademy.in</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 justify-items-start sm:justify-items-start">
                            <div className="flex flex-col gap-4">
                                <a href="/" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">HOME</a>
                                <a href="/about" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">ABOUT US</a>
                                <a href="/contact" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">CONTACT US</a>
                                {/* <a href="/courses" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">COURSES</a> */}
                                {/* <a href="/blogs" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">BLOGS</a> */}
                            </div>

                            <div className="flex flex-col gap-4">
                                <a target="_blank" href="https://www.facebook.com/prepacademy.in" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">FACEBOOK</a>
                                <a target="_blank" href="https://www.instagram.com/prepacademy.in?igsh=MWg5b2xpMzdsdXU4dw==" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">INSTAGRAM</a>
                                <a target="_blank" href="https://youtube.com/@prepacademy?si=AkE3P1yj3EmWRL2y" className="text-black no-underline text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-[#FF0000]">YOUTUBE</a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="mt-12 text-center text-[#8A8A8A]">
                    © 2025 All Rights Reserved
                </div>
            </div>
        </footer>
    )
}


