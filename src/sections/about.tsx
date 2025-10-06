// import Heading from "../components/heading"
// import { aboutData } from "../data"
// import shape from "../assets/images/shape.png"
// const About = () => {
//     return (<div id="about" className="container-page !py-10 items-center flex flex-col gap-10">
//         <div className="text-center">
//             <Heading title="YOUR CATALYST FOR TRANSFORMATION" desc="The Rangrez Network (TRN) is guided by a bold vision to empower businesses to reach their full potential by turning ambition into action and challenges into opportunities. With deep market intelligence and future-focused insights, we anticipate change, seize opportunities, and build lasting advantage for our clients, working side by side with their leadership teams to shape strategy, unlock innovation, and translate ambition into measurable impact." />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {aboutData.first_section.map((e,idx)=><div key={`About_${e.title}_${idx}`} className="card-hero card-about p-5 pr-20 flex flex-col justify-center gap-2">
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
// export default About
"use client";
import Heading from "../components/heading";
import { aboutData } from "../data";
import shape from "../assets/images/shape.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      id="about"
      ref={ref}
      className="container-page overflow-hidden !py-10 items-center flex flex-col gap-10"
    >
      <div className="text-center">
        <Heading
          title="YOUR CATALYST FOR TRANSFORMATION"
          desc="The Rangrez Network (TRN) is guided by a bold vision to empower businesses to reach their full potential by turning ambition into action and challenges into opportunities. With deep market intelligence and future-focused insights, we anticipate change, seize opportunities, and build lasting advantage for our clients, working side by side with their leadership teams to shape strategy, unlock innovation, and translate ambition into measurable impact."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {aboutData.first_section.map((e, idx) => (
          <motion.div
            key={`About_${e.title}_${idx}`}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="card-hero card-about p-5 pr-20 flex flex-col justify-center gap-2"
          >
            <div className="num-choose">
              <img src={shape} alt="Shape" />
              <span>{e.icon}</span>
            </div>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
