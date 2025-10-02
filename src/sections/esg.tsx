import Heading from "../components/heading"
import { aboutData } from "../data"
import shape from "../assets/images/shape.png"
const Values = () => {
    return (<div  className="items-center flex flex-col gap-10">
        <Heading title="Values" desc="Success at The Rangrez Network (TRN) is driven by a set of unwavering core values that guide our approach to business, client relationships, and industry impact. Our governance framework ensures transparency, integrity, and compliance across all operations, with a strong focus on responsible AI and technology use." />
        <div className="grid grid-cols-3 gap-5">
            {aboutData.second_section.map((e,idx)=><div key={`About_${e.title}_${idx}`} className="card-hero card-about dark-card p-5 pr-20 flex flex-col gap-2">
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
export default Values