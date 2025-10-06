// import { servicesData } from "../data"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import NavigationSlider from "../components/navigationSlider";
// import { useState } from "react";

// const Services = ()=>{
//     const lastSlider = ()=>{
//         const btn = document.querySelector("#services .swiper-button-prev") as HTMLElement | null;
//         btn?.click();
//     }
//     const nextSlider = ()=> {
//         const btn = document.querySelector("#services .swiper-button-next") as HTMLElement | null;
//         btn?.click();
//     }
//     const [isActiveNext, setIsActiveNext ] = useState<boolean>(true)
//     const [isActiveLast, setIsActiveLast ] = useState<boolean>(false)

//     return(<div id="services" >
//             <NavigationSlider isNextAvailable={isActiveNext} isLastAvailable={isActiveLast} lastStep={lastSlider} nextStep={nextSlider}/>
//             <div>
//                 <Swiper
//                   modules={[Navigation]}
//                   navigation
//                   autoplay={{
//                       delay: 3000,       
//                       disableOnInteraction: false,
//                     }}
//                   spaceBetween={20}
//                   slidesPerView={4}
//                   breakpoints={{
//                       200: {
//                         slidesPerView: 1,
//                       },
//                       450: {
//                         slidesPerView: 2,
//                       },
//                       640: {
//                         slidesPerView: 2,
//                       },
//                       1024: {
//                         slidesPerView: 3,
                        
//                       },
//                     }}
//                     onSlideChange={(swiper) => {
//                       if(swiper.activeIndex == 0) {setIsActiveLast(false)}else{setIsActiveLast(true)}
//                       const slidePerView = swiper.params.slidesPerView as number;
//                       const totalSteps  = servicesData.length - slidePerView
//                       if(swiper.activeIndex == totalSteps) {setIsActiveNext(false)}else{setIsActiveNext(true)}
//                     }}  
//                   >   
//                     {servicesData.map((e,idx)=>(<SwiperSlide key={`Services_${e.name}_${idx}`}>
//                       <div className="card-hero justify-center p-4 flex flex-col gap-1" >
//                           <div>{e.icon}</div>
//                           <h2>{e.name}</h2>
//                           <p>{e.description}</p>
//                       </div>
//                     </SwiperSlide>))} 
//               </Swiper>
//             </div>
//         </div>)
// }
// export default Services
"use client";
import { useState, useRef } from "react";
import { servicesData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import NavigationSlider from "../components/navigationSlider";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const lastSlider = () => {
    const btn = document.querySelector(
      "#services .swiper-button-prev"
    ) as HTMLElement | null;
    btn?.click();
  };
  const nextSlider = () => {
    const btn = document.querySelector(
      "#services .swiper-button-next"
    ) as HTMLElement | null;
    btn?.click();
  };

  const [isActiveNext, setIsActiveNext] = useState<boolean>(true);
  const [isActiveLast, setIsActiveLast] = useState<boolean>(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div id="services" ref={ref}>
      <NavigationSlider
        isNextAvailable={isActiveNext}
        isLastAvailable={isActiveLast}
        lastStep={lastSlider}
        nextStep={nextSlider}
      />

      <Swiper
        modules={[Navigation]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          200: { slidesPerView: 1 },
          450: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSlideChange={(swiper) => {
          setIsActiveLast(swiper.activeIndex !== 0);

          const slidePerView = Number(swiper.params.slidesPerView);
          const totalSteps = servicesData.length - slidePerView;
          setIsActiveNext(swiper.activeIndex !== totalSteps);
        }}
      >
        {servicesData.map((e, idx) => (
          <SwiperSlide key={`Services_${e.name}_${idx}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="card-hero card-services justify-center p-4 flex flex-col gap-1 h-[200px]"
            >
              <div>{e.icon}</div>
              <h2>{e.name}</h2>
              <p>{e.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;

