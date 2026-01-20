import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Experts from '../components/home/Experts'
import Examination from '../components/home/Examination'
import Preperation from '../components/home/Preperation'
import Lead from '../components/home/Lead'
export default function Home() {
    return (
        <div className="min-h-screen bg-[#F4F2F0]">
            <div className="px-10">
                <Header />
                <Hero />
                <Experts />
                <Examination />
                <Preperation />
                <Lead />
                <Footer />
            </div>
        </div>
    )
}