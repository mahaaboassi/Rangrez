import { useEffect, useState } from "react";
import { logo, logoLight } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState<any | boolean>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll((prev: any) => (prev === true ? false : prev));
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -150;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handle click on menu link
  const handleScrollTo = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
  };
  return (
    <nav
      className={`flex justify-end items-center !py-3 container-page ${
        isScroll === true
          ? "scroll px-2"
          : isScroll === false
          ? "scroll-remove"
          : ""
      } relative`}
    >
      {/* Menu Button */}
      <div
        className="menu-button p-2 fixed cursor-pointer top-10 z-50"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="23"
          viewBox="0 0 53 43"
          fill="none"
        >
          <g clipPath="url(#clip0_1419_1561)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53 0.910156V9.59966H14.3197V0.910156H53ZM9.11369 34.2206V42.9102H0V34.2206H9.11369ZM9.11369 17.5654V26.2549H0V17.5654H9.11369ZM9.11369 0.910156V9.59966H0V0.910156H9.11369ZM53 34.2206V42.9102H14.3197V34.2206H53ZM53 17.5654V26.2549H14.3197V17.5654H53Z"
              fill="#3C4D4C"
            />
          </g>
          <defs>
            <clipPath id="clip0_1419_1561">
              <rect
                width="53"
                height="42"
                fill="white"
                transform="translate(0 0.910156)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Logo */}
      <div className="z-50"><Link to="/">{logo}</Link></div>

      {/* Animated Side Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-60 p-6 flex flex-col gap-6 menu-side"
          >
            <div className="flex justify-between">
              <div><Link to="/">{logoLight}</Link></div>
              <div className="cursor-pointer" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 123 123"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1440_2931)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M61.44 0C95.373 0 122.881 27.507 122.881 61.439C122.881 95.372 95.373 122.879 61.44 122.879C27.508 122.88 0 95.372 0 61.439C0 27.507 27.508 0 61.44 0ZM81.719 36.226C83.082 34.863 85.291 34.863 86.655 36.226C88.018 37.589 88.018 39.799 86.655 41.162L66.375 61.439L86.654 81.717C88.017 83.08 88.017 85.29 86.654 86.654C85.291 88.016 83.082 88.016 81.718 86.654L61.44 66.376L41.162 86.654C39.8 88.016 37.589 88.016 36.226 86.654C34.863 85.291 34.863 83.081 36.226 81.717L56.504 61.439L36.226 41.162C34.863 39.799 34.863 37.589 36.226 36.226C37.589 34.863 39.799 34.863 41.162 36.226L61.44 56.504L81.719 36.226Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1440_2931">
                      <rect width="122.881" height="122.88" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <h1>TRN Corporation</h1>
            <hr />
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              <li className="cursor-pointer" onClick={() => handleScrollTo("#about")}>About</li>
              <li className="cursor-pointer" onClick={() => handleScrollTo("#services")}>Services</li>
              <li className="cursor-pointer" onClick={() => handleScrollTo("#industries")}>Industries</li>
              <li onClick={()=>setMenuOpen(false)} >
                <Link to="/validation" >Validation</Link>
              </li>
              <li onClick={()=>setMenuOpen(false)}>
                <Link to="/terms-and-conditions" >Terms And Conditions</Link>
              </li>
              <li className="cursor-pointer" onClick={() => handleScrollTo("#contact")}>Contact</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

