import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
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
    return(<div id="highlights"  >
        <div className="first-line text-center flex flex-col items-center pt-20">
            <Heading title="HIGHLIGHTS" desc="" />
            <NavigationSlider lastStep={lastSlider} nextStep={nextSlider}  /> 
        </div>
        <div className="relative -mt-20 container-page">
            <Swiper
                modules={[Navigation, Autoplay]}
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
                >   
                {highlightsData.map((e,idx)=>(<SwiperSlide key={`Services_${e.title}_${idx}`}>
                    <div className="card-hero mb-3 shadow flex flex-col gap-1" >
                        <div className="icon-container flex justify-center p-5">
                            <div>{e.icon}</div>
                        </div>
                        <div className="p-3 text-start">
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