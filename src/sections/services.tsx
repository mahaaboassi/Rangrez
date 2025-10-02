import { servicesData } from "../data"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import NavigationSlider from "../components/navigationSlider";
import { useState } from "react";

const Services = ()=>{
    const lastSlider = ()=>{
        const btn = document.querySelector("#services .swiper-button-prev") as HTMLElement | null;
        btn?.click();
    }
    const nextSlider = ()=> {
        const btn = document.querySelector("#services .swiper-button-next") as HTMLElement | null;
        btn?.click();
    }
    const [isActiveNext, setIsActiveNext ] = useState<boolean>(true)
    const [isActiveLast, setIsActiveLast ] = useState<boolean>(false)

    return(<div id="services" >
            <NavigationSlider isNextAvailable={isActiveNext} isLastAvailable={isActiveLast} lastStep={lastSlider} nextStep={nextSlider}/>
            <div>
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
                      200: {
                        slidesPerView: 1,
                      },
                      400: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                        
                      },
                    }}
                    onSlideChange={(swiper) => {
                      if(swiper.activeIndex == 0) {setIsActiveLast(false)}else{setIsActiveLast(true)}
                      const slidePerView = swiper.params.slidesPerView as number;
                      const totalSteps  = servicesData.length - slidePerView
                      if(swiper.activeIndex == totalSteps) {setIsActiveNext(false)}else{setIsActiveNext(true)}
                    }}  
                  >   
                    {servicesData.map((e,idx)=>(<SwiperSlide key={`Services_${e.name}_${idx}`}>
                      <div className="card-hero justify-center p-4 flex flex-col gap-1" >
                          <div>{e.icon}</div>
                          <h2>{e.name}</h2>
                          <p>{e.description}</p>
                      </div>
                    </SwiperSlide>))} 
              </Swiper>
            </div>
        </div>)
}
export default Services