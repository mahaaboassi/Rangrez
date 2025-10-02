import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from "../components/heading";
import { useState } from 'react';
import { industriesData } from '../data';

const Insdustries = () => {
    const lastSlider = ()=>{
        const btn = document.querySelector("#industries .swiper-button-prev") as HTMLElement | null;
        btn?.click();
    }
    const nextSlider = ()=> {
        const btn = document.querySelector("#industries .swiper-button-next") as HTMLElement | null;
        btn?.click();
    }
    const [isActiveNext, setIsActiveNext ] = useState<boolean>(true)
    const [isActiveLast, setIsActiveLast ] = useState<boolean>(false)

    return ( <div id="industries" className='flex flex-col gap-10'>
        <Heading title="INDUSTRIES" desc="The Rangrez Network (TRN) delivers industry-specific growth strategies across technology, education, healthcare, hospitality, real estate, manufacturing, retail, and entertainment, empowering businesses to innovate, scale, and thrive through digital-first solutions, operational excellence, and market-driven transformation."/>
        <div className='flex justify-end items-center'>
            <div className='flex gap-3'>
                <div onClick={()=>lastSlider()} className={`arrow-last ${!isActiveLast? "disable-arrow" : "" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                    <path d="M0.316406 17.65L7.94974 10L0.316406 2.35L2.66641 0L12.6664 10L2.66641 20L0.316406 17.65Z" fill="white"/>
                    </svg>
                </div>
                <div onClick={()=>nextSlider()} className={`arrow-next ${!isActiveNext? "disable-arrow" : "" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                    <path d="M0.316406 17.65L7.94974 10L0.316406 2.35L2.66641 0L12.6664 10L2.66641 20L0.316406 17.65Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
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
                    const totalSteps  = industriesData.length - slidePerView
                    if(swiper.activeIndex == totalSteps) {setIsActiveNext(false)}else{setIsActiveNext(true)}
                }}  
                >   
                {industriesData.map((e,idx)=>(<SwiperSlide key={`Services_${e.name}_${idx}`}>
                    <div className="card-hero justify-center p-4 flex flex-col gap-1" >
                        <div>{e.icon}</div>
                        <h2>{e.name}</h2>
                        <p>{e.description}</p>
                    </div>
                </SwiperSlide>))} 
            </Swiper>
        </div>
    </div> );
}
export default Insdustries