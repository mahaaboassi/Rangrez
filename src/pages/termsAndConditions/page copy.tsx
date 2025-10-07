import { termsAndConsitionData } from "../../data";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Heading from "../../components/heading";

const Terms = () => {
  useEffect(()=>{
      window.scrollTo({top:0, behavior:"smooth"});
    },[])

  return <div className="flex flex-col gap-5 md:gap-10">
    <div className="hero-subpage flex items-center justify-center  ">
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
          TERMS AND CONDITIONS
        </motion.h1>

        <motion.h2
          className="blurry"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        Know your rights and responsibilities. Read our terms
        </motion.h2>
      </motion.div>
    </div>
    <div className="content-page container-page">
      <div className="flex flex-col gap-5">
        {termsAndConsitionData.children.map((e, idx) => (<Heading key={`Terms_${e.title}_${idx}`} title={e.title} desc={e.description} />))}
      </div>
    </div>
    
  </div>;
}      
export default Terms;