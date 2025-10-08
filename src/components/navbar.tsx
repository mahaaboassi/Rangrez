import { useEffect, useRef, useState } from "react";
import { logo } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menu from "../assets/images/puzzle_border.webp";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState<any | boolean>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement | null>(null);

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
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -150;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScrollTo = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
  };

  // Animation variants for the menu
  const menuVariants : Variants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
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
        <img className="w-16" src={menu} alt="Menu" />
      </div>

      {/* Logo */}
      <div className="z-50">
        <Link to="/">{logo}</Link>
      </div>

      {/* Animated Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-26 menu-content right-0 bg-white z-60 w-[200px] sm:w-[250px] p-5 flex flex-col gap-4 shadow-lg rounded-xl origin-top-right"
            variants={menuVariants}
             ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col gap-4 text-sm font-semibold">
              <li className="cursor-pointer" onClick={() => handleScrollTo("#about")}>About</li>
              <li className="cursor-pointer" onClick={() => handleScrollTo("#engagments")}>Engagments</li>
              <li className="cursor-pointer" onClick={() => handleScrollTo("#services")}>Services</li>
              <li className="cursor-pointer" onClick={() => handleScrollTo("#industries")}>Industries</li>
              <li className="cursor-pointer" onClick={() => handleScrollTo("#contact")}>Contact</li>
            </ul>

            <hr />

            <div className="flex gap-4 text-sm justify-between">
              <div className="final-links" onClick={() => setMenuOpen(false)}>
                <Link to="/validation">Validation</Link>
              </div>
              <div className="final-links" onClick={() => setMenuOpen(false)}>
                <Link to="/terms-and-conditions">Terms</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


