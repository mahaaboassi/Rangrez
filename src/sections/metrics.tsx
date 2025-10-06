// import type React from "react";

// type MetricItem = {
//   number: number;
//   signal?: string;
//   hint: string;
//   desc: string;
// };

// const data: MetricItem[] = [
//   { number: 300, signal: "+", hint: "Allys", desc: "Channel Partners in Networks" },
//   { number: 100, signal: "+", hint: "Million", desc: "Networked Revenue Delivered" },
//   { number: 20, signal: "+", hint: "Years", desc: "Skilled Networks Experience" },
// ];
// const Metrics: React.FC = ()=>{
//     return(<div className="metrics flex flex-col xs:flex-row  gap-5 justify-end items-center container-page !py-10 md:!py-20">
//         {data.map((e,idx)=>(<div key={`Metrics_${e.hint}_${idx}`} className="card-metrics w-full xs:w-fit justify-center p-4 flex flex-col justify-center items-center text-center gap-1" >
//             <div className="content-metrics flex gap-1 items-end items-center">
//                 <h2>{e.number}{e.signal && <span className="text-xl">{e.signal}</span>}</h2> 
//                 <h3>{e.hint}</h3>
//             </div>
            
//             <p>{e.desc}</p>
//         </div>))}               
//     </div>)
// }
// export default Metrics
"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

type MetricItem = {
  number: number;
  signal?: string;
  hint: string;
  desc: string;
};

const data: MetricItem[] = [
  { number: 300, signal: "+", hint: "Allys", desc: "Channel Partners in Networks" },
  { number: 100, signal: "+", hint: "Million", desc: "Networked Revenue Delivered" },
  { number: 20,  signal: "+", hint: "Years", desc: "Skilled Networks Experience" },
];

const Metrics: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="metrics flex flex-col xs:flex-row gap-2 md:gap-5 justify-end items-center container-page !py-10 md:!py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {data.map((e, idx) => (
        <div
          key={`Metrics_${e.hint}_${idx}`}
          className="card-metrics w-full xs:w-fit p-4 flex flex-col justify-center items-center text-center gap-1"
        >
          <div className="content-metrics flex gap-1 items-end justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold ">
              {isInView ? (
                <CountUp end={e.number} duration={2.5} />
              ) : (
                0
              )}
              {e.signal && <span className="text-xl">{e.signal}</span>}
            </h2>
            <h3 className="text-gray-300 text-lg">{e.hint}</h3>
          </div>
          <p className="text-gray-300">{e.desc}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Metrics;
