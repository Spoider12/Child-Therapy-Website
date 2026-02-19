import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import{FaBars, FaTimes} from "react-icons/fa"
import {
  
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGoogle,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();

  const [active, setActive] = useState("Home");
  const [showServices, setShowServices] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu,setMobileMenu] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Gallery",
    "Blog",
    "Contact Us",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(!(currentScrollY > lastScrollY && currentScrollY > 80));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (item) => {
    setActive(item);

    if (item === "Services") {
      setShowServices(!showServices);
      return;
    }

    setShowServices(false);

    if (item === "Home") navigate("/");
    if (item === "About Us") navigate("/about");
    if (item === "Contact Us") navigate("/contact");
    if (item === "Gallery") navigate("/gallery");
    if (item === "Blog") navigate("/blog");
  };

   return (
  <header
    className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
      showHeader ? "translate-y-0" : "-translate-y-full"
    }`}
    style={{
      background:
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/NavBackground.png') center/cover",
    }}
  >
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">

      {/* LOGO */}
      <img
        src="/NewLogo2.png"
        alt="Logo"
        className="h-14 md:h-20 object-contain"
      />

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex items-center gap-10 relative">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavigation(item)}
            className={`text-sm font-medium cursor-pointer ${
              active === item ? "text-white" : "text-gray-300"
            } hover:text-white transition-colors`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* DESKTOP ICONS */}
      <div className="hidden md:flex items-center gap-4 text-gray-300 text-lg">
        <a href="tel:+917827068869">
          <FaPhoneAlt className="hover:text-green-400 transition" />
        </a>

        <a
          href="https://wa.me/917827068869"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="hover:text-green-500 transition" />
        </a>

        <a
          href="https://maps.app.goo.gl/MDCF7pGss8hTgKH7A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoogle className="hover:text-red-500 transition" />
        </a>

        <a
          href="https://www.instagram.com/drchandrapt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-400 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/akshay-raj-chandra-b62707ab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600 transition" />
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden text-white text-2xl">
        {mobileMenu ? (
          <FaTimes onClick={() => setMobileMenu(false)} />
        ) : (
          <FaBars onClick={() => setMobileMenu(true)} />
        )}
      </div>
    </div>

    {/* MOBILE DROPDOWN MENU */}
    {mobileMenu && (
      <div className="md:hidden bg-black text-white px-6 py-6 space-y-6">

        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => {
              handleNavigation(item);
              setMobileMenu(false);
            }}
            className="cursor-pointer text-lg"
          >
            {item}
          </div>
        ))}

        {/* Mobile Social Icons */}
        <div className="flex gap-6 text-xl pt-4 border-t border-gray-700">
          <a href="tel:+917827068869">
            <FaPhoneAlt />
          </a>

          <a
            href="https://wa.me/917827068869"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://maps.app.goo.gl/MDCF7pGss8hTgKH7A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle />
          </a>

          <a
            href="https://www.instagram.com/drchandrapt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/akshay-raj-chandra-b62707ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    )}
  </header>
);
}
      
