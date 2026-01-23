import Header from '../components/Header'
import Footer from '../components/Footer'
import Journey from '../components/contact/joureny'
import Form from '../components/contact/Form'
export default function Contact() {
    return (
        <div className="min-h-screen bg-[#F4F2F0]">
            <div className="md:px-10 px-2">
                <Header />
                <Journey />
                <Form />
                <Footer />
            </div>
        </div>
    )
}