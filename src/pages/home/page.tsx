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
import Contact from "../../sections/contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    let id = "";
    if(location.state?.scrollTo){
      id = location.state.scrollTo
    }else if(location.pathname != "/"){
      const newPathToScroll = location.pathname.split("/")
      console.log(newPathToScroll);
      id = `#${newPathToScroll[1]}`
    }
    const element = id ? document.querySelector(id) : "";
    if (element) {
      setTimeout(() => {
        const yOffset = -150;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 200); 
    }
  }, [location]);

  return <article className='flex flex-col gap-5 md:gap-10'>
      <link rel="canonical" href="https://rangrez.net/"/>
      <title>TRN | Future Ready Growth Advisory</title>
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
      <Contact/>
    </article>
;
}      
export default Home;