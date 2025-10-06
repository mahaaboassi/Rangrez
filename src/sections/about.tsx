import Heading from "../components/heading"
import { aboutData } from "../data"
import shape from "../assets/images/shape.png"
const About = () => {
    return (<div id="about" className="container-page !py-10 items-center flex flex-col gap-10">
        <div className="text-center">
            <Heading title="YOUR CATALYST FOR TRANSFORMATION" desc="The Rangrez Network (TRN) is guided by a bold vision to empower businesses to reach their full potential by turning ambition into action and challenges into opportunities. With deep market intelligence and future-focused insights, we anticipate change, seize opportunities, and build lasting advantage for our clients, working side by side with their leadership teams to shape strategy, unlock innovation, and translate ambition into measurable impact." />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {aboutData.first_section.map((e,idx)=><div key={`About_${e.title}_${idx}`} className="card-hero card-about p-5 pr-20 flex flex-col justify-center gap-2">
                 <div className="num-choose ">
                    <img src={shape} alt="Shape" />
                    <span>{e.icon}</span>
                </div>
                <h2>{e.title}</h2>
                <p>{e.description}</p>
            
            </div>)}

        </div>
        
        
    </div>)
}
export default About