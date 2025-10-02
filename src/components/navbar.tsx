import { useEffect, useState } from "react"
import img from "../assets/images/logo-menu.jpg"
import { logo } from "../data"

const Navbar = ()=>{
    const [ isScroll, setIsScroll ] = useState<any | boolean>(null)
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 300) {
            setIsScroll(true);
            }else{
                setIsScroll((prev:any) => (prev === true ? false : prev));
            }
        };
        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])
    return(<nav className={`flex justify-end py-3 px-5 ${
                    isScroll === true? "scroll px-2": isScroll === false? "scroll-remove": ""
                }`}>
        <div className="menu-button p-2 fixed top-10 left-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="23" viewBox="0 0 53 43" fill="none">
                <g clipPath="url(#clip0_1419_1561)">
                <path fillRule="evenodd" clipRule="evenodd" d="M53 0.910156V9.59966H14.3197V0.910156H53ZM9.11369 34.2206V42.9102H0V34.2206H9.11369ZM9.11369 17.5654V26.2549H0V17.5654H9.11369ZM9.11369 0.910156V9.59966H0V0.910156H9.11369ZM53 34.2206V42.9102H14.3197V34.2206H53ZM53 17.5654V26.2549H14.3197V17.5654H53Z" fill="#3C4D4C"/>
                </g>
                <defs>
                <clipPath id="clip0_1419_1561">
                <rect width="53" height="42" fill="white" transform="translate(0 0.910156)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div>
            {logo}
        </div>
    </nav>)
}
export default Navbar