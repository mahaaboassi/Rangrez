import './App.css'
import Hero from './sections/hero'
import Navbar from './components/navbar'
import Services from './sections/services'
import Heading from './components/heading'
import Metrics from './sections/metrics'
import Insdustries from './sections/industries'
import About from './sections/about'
import Values from './sections/values'
import ESG from './sections/esg'
import Highlights from './sections/highlights'
import Footer from './components/footer'

function App() {
  return (
    <div className='flex flex-col gap-5 md:gap-10'>
      {/* Navbar */}
      <Navbar/>
      {/* Hero Section */}
      <Hero/>
      <div className='container-page flex flex-col gap-10'>
        {/* Services */}
        <Services/>
        <Heading isWithButton={true} label="Know More" title='Services' desc='The Rangrez Network (TRN) delivers expert-led business solutions, from formation, strategy, and finance to branding, automation, and market intelligence, empowering businesses to scale, optimize operations, attract capital, enhance customer value, transform, and achieve sustainable growth in today’s dynamic, digital, and data-driven economy.' />
      </div>
      <Metrics/>
      <div className='container-page flex flex-col gap-10'>
        <Insdustries/>
      </div>
      <About/>
      <div className='container-page flex flex-col gap-10'>
        <Values/>
        <ESG/>
      </div>
      <Highlights/>
      <div className='container-page'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
