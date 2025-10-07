import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Heading from "../components/heading";
import { industriesData } from '../data';
import Card from '../components/card';
import NavigationSlider from '../components/navigationSlider';

const Insdustries = () => {
    const lastSlider = ()=>{
        const btn = document.querySelector("#industries .swiper-button-prev") as HTMLElement | null;
        btn?.click();
    }
    const nextSlider = ()=> {
        const btn = document.querySelector("#industries .swiper-button-next") as HTMLElement | null;
        btn?.click();
    }


    return ( <div id="industries" className='flex flex-col gap-2 '>
        <Heading title="INDUSTRIES" desc="The Rangrez Network (TRN) delivers industry-specific growth strategies across technology, education, healthcare, hospitality, real estate, manufacturing, retail, and entertainment, empowering businesses to innovate, scale, and thrive through digital-first solutions, operational excellence, and market-driven transformation."/>
        <NavigationSlider lastStep={lastSlider} nextStep={nextSlider} />
        <div>
            <Swiper
                modules={[Navigation,Autoplay]}
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
                    600: {
                    slidesPerView: 2,
                    },
                    640: {
                    slidesPerView: 2,
                    },
                    1024: {
                    slidesPerView: 3,
                    
                    },
                }}  
                >   
                {industriesData.map((e,idx)=>(<SwiperSlide key={`Services_${e.name}_${idx}`}>
                    <div className="card-hero dark-card justify-center p-4 flex flex-col gap-1" >
                        <Card description={e.description} title={e.name} icon={e.icon} />
                    </div>
                </SwiperSlide>))} 
            </Swiper>
        </div>
    </div> );
}
export default Insdustries