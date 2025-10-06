import type React from "react";

type MetricItem = {
  number: number;
  signal?: string;
  hint: string;
  desc: string;
};

const data: MetricItem[] = [
  { number: 300, signal: "+", hint: "Allys", desc: "Channel Partners in Networks" },
  { number: 100, signal: "+", hint: "Million", desc: "Networked Revenue Delivered" },
  { number: 20, signal: "+", hint: "Years", desc: "Skilled Networks Experience" },
];
const Metrics: React.FC = ()=>{
    return(<div className="metrics flex flex-col xs:flex-row gap-5 justify-end items-center container-page !py-10 md:!py-20">
        {data.map((e,idx)=>(<div key={`Metrics_${e.hint}_${idx}`} className="card-metrics w-full justify-center p-4 flex flex-col justify-center items-center text-center gap-1" >
            <div className="content-metrics flex gap-1 items-end items-center">
                <h2>{e.number}{e.signal && <span className="text-xl">{e.signal}</span>}</h2> 
                <h3>{e.hint}</h3>
            </div>
            
            <p>{e.desc}</p>
        </div>))}               
    </div>)
}
export default Metrics