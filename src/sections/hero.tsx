import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="hero pt-36 xs:pt-60 md::pt-50">
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
          FUTURE-READY <span >GROWTH ADVISORY</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Guided by a bold vision to empower businesses, we turn challenges into opportunities and transform ambition into reality.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button onClick={()=>{
                const element = document.querySelector("#contact");
                if (element) {
                    const yOffset = -150; 
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth", });
                }
          }} className="btn-hero ">
            Get Started
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
