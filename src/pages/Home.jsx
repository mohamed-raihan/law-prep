import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Experts from '../components/home/Experts'
import Examination from '../components/home/Examination'
import Preperation from '../components/home/Preperation'
import Lead from '../components/home/Lead'
import LawJoureny from '../components/home/LawJoureny'
import Faq from '../components/home/Faq'
export default function Home() {
    return (
        <div className="min-h-screen bg-[#F4F2F0]">
            <div className="md:px-10 px-2">
                <Header />
                <Hero />
                <Experts />
                <Examination />
                <Lead /> 
                <Preperation />
                <LawJoureny />
                <Faq />
                <Footer />
            </div>
        </div>
    )
}