import type React from "react";

type HeadingProps = {
    title: string;
    desc: string;
    isWithButton?: boolean;
    label?: string;
}


const Heading: React.FC<HeadingProps> = ({title,desc,label,isWithButton})=>{
    return(<div className="heading flex flex-col gap-2 md:gap-3">
        <h2>{title}</h2>
        <p>{desc}</p>
        {isWithButton && <span>{label}</span> }
    </div>)
}
export default Heading