import { termsAndConsitionData } from "../../data";
import shape from "../../assets/images/shape.png";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Terms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"});
  },[])
  return <div className="flex flex-col gap-5 md:gap-10 overflow-hidden">
    <div className="hero-subpage flex items-center justify-center ">
      <motion.div
        className="content-hero flex flex-col gap-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className=""
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TERMS 
        </motion.h1>

        <motion.h2
          className="blurry"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Know your rights and responsibilities.
        </motion.h2>
      </motion.div>
    </div>
    <div className="content-page container-page">
      <div className="flex flex-col gap-5">
        <div ref={ref}  className="grid grid-cols-1 gap-5">
          {termsAndConsitionData.children.map((e, idx) => (
            <motion.div
              key={`Terms_${e.title}_${idx}`}
              initial={{ opacity: 0, x: 50 }} // start from right
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="card-hero card-about px-5 py-10 md:!p-12 pr-24 flex flex-col justify-center gap-2"
            >
              <div className="num-choose">
                <img src={shape} alt="Shape" />
                <span>{e.img}</span>
              </div>
              <h2>{e.title}</h2>
              <p>{e.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
  </div>;
}      
export default Terms;