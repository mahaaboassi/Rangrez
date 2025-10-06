import Heading from "../components/heading"
import { aboutData } from "../data"
import shape from "../assets/images/shape.png"
const ESG = () => {
    return (<div  className="items-center flex flex-col gap-10">
        <Heading title="ESG COMMITMENT" desc="Environmental, Social, and Governance (ESG) principles are not an add-on at The Rangrez Network (TRN), they are embedded at the heart of our values, strategies, and services. We champion environmental sustainability by reducing our carbon footprint, promoting green technologies, and we foster diversity, equity, and inclusion while supporting employee well-being and community development through ethical, human-centered practices." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {aboutData.third_section.map((e,idx)=><div key={`About_${e.title}_${idx}`} className="card-hero card-about dark-card p-5 pr-20 flex flex-col justify-center  gap-2">
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
export default ESG