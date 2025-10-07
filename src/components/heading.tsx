import type React from "react";
import NavigationSlider from "./navigationSlider";

type HeadingProps = {
    title: string;
    desc: string;
    isWithButton?: boolean;
    label?: string;
}


const Heading: React.FC<HeadingProps> = ({title,desc,isWithButton})=>{
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
    return(<div className="heading flex flex-col gap-2 md:gap-3">
        <h2>{title}</h2>
        <p>{desc}</p>
        {isWithButton && <NavigationSlider
        lastStep={lastSlider}
        nextStep={nextSlider}
      /> }
    </div>)
}
export default Heading