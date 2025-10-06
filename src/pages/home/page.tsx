import { useLocation } from "react-router-dom";
import Heading from "../../components/heading";
import About from "../../sections/about";
import ESG from "../../sections/esg";
import Hero from "../../sections/hero";
import Highlights from "../../sections/highlights";
import Insdustries from "../../sections/industries";
import Metrics from "../../sections/metrics";
import Services from "../../sections/services";
import Values from "../../sections/values";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -150;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 200); 
      }
    }
  }, [location]);
  return <div className='flex flex-col gap-5 md:gap-10'>
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
    </div>
;
}      
export default Home;