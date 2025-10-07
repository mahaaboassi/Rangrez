// import type React from "react"

// type NavigationSlideProps = {
//     nextStep: ()=> void,
//     lastStep: ()=> void,
//     isNextAvailable: boolean;
//     isLastAvailable: boolean;
// }
// const NavigationSlider :React.FC<NavigationSlideProps> = ({ 
//     nextStep, 
//     lastStep,
//     isNextAvailable,
//     isLastAvailable,
//  })=>{

//     return(<div className="flex gap-2 py-5">
//         <div onClick={lastStep} className={`last ${!isLastAvailable ? "disable-arrow" : ""}`}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
//                 <path d="M10.5469 1.88L4.44021 8L10.5469 14.12L8.66688 16L0.666876 8L8.66688 -6.41192e-07L10.5469 1.88Z" fill="#F16F63"/>
//             </svg>
//         </div>
//         <div onClick={nextStep} className={`next ${!isNextAvailable ? "disable-arrow" : ""}`}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
//                 <path d="M10.5469 1.88L4.44021 8L10.5469 14.12L8.66688 16L0.666876 8L8.66688 -6.41192e-07L10.5469 1.88Z" fill="#F16F63"/>
//             </svg>
//         </div>

//     </div>)
// }
// export default NavigationSlider 
import type React from "react"

type NavigationSlideProps = {
    nextStep: ()=> void,
    lastStep: ()=> void,
}
const NavigationSlider :React.FC<NavigationSlideProps> = ({ 
    nextStep, 
    lastStep,
 })=>{

    return(<div className="flex gap-2 py-5">
        <div onClick={lastStep} className={`last`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
                <path d="M10.5469 1.88L4.44021 8L10.5469 14.12L8.66688 16L0.666876 8L8.66688 -6.41192e-07L10.5469 1.88Z" fill="#F16F63"/>
            </svg>
        </div>
        <div onClick={nextStep} className={`next`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
                <path d="M10.5469 1.88L4.44021 8L10.5469 14.12L8.66688 16L0.666876 8L8.66688 -6.41192e-07L10.5469 1.88Z" fill="#F16F63"/>
            </svg>
        </div>

    </div>)
}
export default NavigationSlider 