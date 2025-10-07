import type React from "react";
type CardProps = {
    title: string;
    description: string;
    icon?: React.ReactNode;
}
const Card: React.FC<CardProps> = ({description,title,icon}) => {
  return <div className="flex flex-col gap-1 card">
    <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <div>{icon}</div>
    </div>
    <div>
        <p>{description}</p>
    </div>
  </div>;
}   
export default Card;