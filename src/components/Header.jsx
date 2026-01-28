import { useState,useEffect } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin} from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [showServices, setShowServices] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = ["Home", "About Us", "Services", "Gallery", "Blog", "Contact Us"];

    useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide header
        setShowHeader(false);
      } else {
        // scrolling up → show header
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
   <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-white/60 backdrop-blur-md
        border-b border-slate-200/40
        transition-transform duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >






      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="WhatsApp Image 2025-12-14 at 3.45.03 PM.jpeg"
            alt="Logo"
            className="h-24 object-contain"
          />
        </div>

        {/* MENU */}
        <nav className="flex items-center gap-10 relative">
          {menuItems.map((item) => (
            <div
              key={item}
              className="relative flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => {
                setActive(item);
                if (item === "Services") setShowServices(true);
              }}
              onMouseLeave={() => {
                if (item === "Services") setShowServices(false);
              }}
            >
              <button
                className={`text-sm font-medium ${
                  active === item ? "text-blue-400" : "text-gray-300"
                } group-hover:text-blue-300 transition-colors`}
              >
                {item}
                {item === "Services" && <span className="ml-1">▼</span>}
              </button>

              {/* Hover underline */}
              <div className="w-0 h-[2px] bg-blue-500 mt-1 group-hover:w-full transition-all duration-300"></div>

              {/* Active underline */}
              {active === item && (
                <div className="w-full h-[2px] bg-blue-500 -mt-[2px]"></div>
              )}

              {/* 🔽 SERVICES MEGA MENU */}
              {item === "Services" && showServices && (
                <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-[900px] bg-white text-black shadow-2xl rounded-lg p-8 grid grid-cols-3 gap-8 z-50">

                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Therapies</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Occupational Therapy</li>
                      <li>Paediatric Physiotherapy</li>
                      <li>special Education Therapy</li>
                      <li>Speech  & Language Therapy</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Programs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Early Intervention</li>
                      <li>Sensory Integration</li>
                      <li>Special Education</li>
                      <li>Parent Training</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Support</h4>
                    <ul className="space-y-2 text-sm">
                      <li>Assessment</li>
                      <li>Counselling</li>
                      <li>Group Therapy</li>
                      <li>Tele Therapy</li>
                    </ul>
                  </div>

                </div>
              )}
            </div>
          ))}
        </nav>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 text-gray-300 text-lg">
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
          <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
        </div>

      </div>
    </header>
  );
}
