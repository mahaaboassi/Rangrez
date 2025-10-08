// import Heading from "../components/heading"
// import { aboutData } from "../data"
// import shape from "../assets/images/shape.webp"
// const ESG = () => {
//     return (<div  className="items-center flex flex-col gap-10">
//         <Heading title="ESG COMMITMENT" desc="Environmental, Social, and Governance (ESG) principles are not an add-on at The Rangrez Network (TRN), they are embedded at the heart of our values, strategies, and services. We champion environmental sustainability by reducing our carbon footprint, promoting green technologies, and we foster diversity, equity, and inclusion while supporting employee well-being and community development through ethical, human-centered practices." />
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
//             {aboutData.third_section.map((e,idx)=><div key={`About_${e.title}_${idx}`} className="card-hero card-about dark-card p-5 pr-20 flex flex-col justify-center  gap-2">
//                  <div className="num-choose ">
//                     <img src={shape} alt="Shape" />
//                     <span>{e.icon}</span>
//                 </div>
//                 <h2>{e.title}</h2>
//                 <p>{e.description}</p>
            
//             </div>)}
//         </div>
//     </div>)
// }
// export default ESG
"use client";
import Heading from "../components/heading";
import { aboutData } from "../data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "../components/card";

const ESG = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="items-center flex flex-col gap-10">
      <Heading
        title="ESG COMMITMENT"
        desc="Environmental, Social, and Governance (ESG) principles are not an add-on at The Rangrez Network (TRN), they are embedded at the heart of our values, strategies, and services. We champion environmental sustainability by reducing our carbon footprint, promoting green technologies, and we foster diversity, equity, and inclusion while supporting employee well-being and community development through ethical, human-centered practices."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {aboutData.third_section.map((e, idx) => (
          <motion.div
            key={`ESG_${e.title}_${idx}`}
            initial={{ opacity: 0, x: -50 }} // start from left
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="card-hero p-5 flex flex-col justify-center gap-2"
          >
            <Card icon={e.icon} description={e.description} title={e.title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ESG;
