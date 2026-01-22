import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/about/Banner'
import Statistics from '../components/about/Statistics'
import WhyChoose from '../components/about/WhyChoose'
import Subscribe from '../components/about/subscribe'
import Experts from '../components/home/Experts'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F4F2F0]">
      <div className="px-10">
        <Header />
        <Banner />
        <Statistics />
        <Experts />
        <WhyChoose />
        {/* <Subscribe /> */}
        <Footer />
      </div>
    </div>
  )
}