import './App.css'
import Header from './assets/components/header'
import HeroSection from './assets/components/herosection'
import Offerings from './assets/components/Offerings'
import AboutUs from './assets/components/AboutUs'
import ContactUs from './assets/components/ContactUs'
import Footer from './assets/components/Footer'

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Offerings/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App