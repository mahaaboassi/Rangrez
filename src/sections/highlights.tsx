import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from "../components/heading"
import NavigationSlider from "../components/navigationSlider";
import { highlightsData } from "../data";

const Highlights = () => {
    const lastSlider = ()=>{
        const btn = document.querySelector("#highlights .swiper-button-prev") as HTMLElement | null;
        btn?.click();
    }
    const nextSlider = ()=> {
        const btn = document.querySelector("#highlights .swiper-button-next") as HTMLElement | null;
        btn?.click();
    }
    const [isActiveNext, setIsActiveNext ] = useState<boolean>(true)
    const [isActiveLast, setIsActiveLast ] = useState<boolean>(false)
    return(<div id="highlights"  >
        <div className="first-line text-center pt-20">
            <Heading title="HIGHLIGHTS" desc="" />
            <NavigationSlider lastStep={lastSlider} nextStep={nextSlider} isLastAvailable={isActiveLast} isNextAvailable={isActiveNext} /> 
        </div>
        <div className="relative -mt-20 container-page">
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
                    slidesPerView: 4,
                    
                    },
                }}
                onSlideChange={(swiper) => {
                    if(swiper.activeIndex == 0) {setIsActiveLast(false)}else{setIsActiveLast(true)}
                    const slidePerView = swiper.params.slidesPerView as number;
                    const totalSteps  = highlightsData.length - slidePerView
                    if(swiper.activeIndex == totalSteps) {setIsActiveNext(false)}else{setIsActiveNext(true)}
                }}  
                >   
                {highlightsData.map((e,idx)=>(<SwiperSlide key={`Services_${e.title}_${idx}`}>
                    <div className="card-hero mb-3 shadow justify-center flex flex-col gap-1" >
                        <div className="icon-container flex justify-end p-5">
                            <div>{e.icon}</div>
                        </div>
                        <div className="p-3">
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                        </div>
                        
                    </div>
                </SwiperSlide>))} 
            </Swiper>
        </div>
    </div>)
}
export default Highlights