import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [showServices, setShowServices] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
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
        bg-cover bg-center
        bg-[url('/NavBackground.png')]
        backdrop-blur-md
        border-b border-slate-200/40
        transition-transform duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/NavBackground.png') center/cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* LOGO */}
        <div
          className="flex items-center gap-2 flex-shrink-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
            padding: "0 10px",
          }}
        >
          <img
            src="/NewLogo2.png"
            alt="Logo"
            className="h-24 object-contain bg-transparent drop-shadow-md"
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
                  active === item ? "text-white" : "text-gray-300"
                } group-hover:text-white transition-colors`}
              >
                {item}
                {item === "Services" && <span className="ml-1">▼</span>}
              </button>

              <div className="w-0 h-[2px] bg-white mt-1 group-hover:w-full transition-all duration-300"></div>

              {active === item && (
                <div className="w-full h-[2px] bg-white -mt-[2px]"></div>
              )}

              {item === "Services" && showServices && (
                <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-[900px] bg-white text-black shadow-2xl rounded-lg p-8 grid grid-cols-3 gap-8 z-50">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">
                      Therapies
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Occupational Therapy</li>
                      <li>Paediatric Physiotherapy</li>
                      <li>Special Education Therapy</li>
                      <li>Speech & Language Therapy</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">
                      Programs
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>Early Intervention</li>
                      <li>Sensory Integration</li>
                      <li>Special Education</li>
                      <li>Parent Training</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">
                      Support
                    </h4>
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
        <a
            href="https://www.facebook.com/share/14SqK4L8ABx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 cursor-pointer"
          >
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          </a>
          
          
          <a
            href="https://www.instagram.com/drchandrapt?igsh=MW44a3k4bWtlaDFueg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 cursor-pointer"
          >
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
          </a>
          
          <a
            href="https://wa.me/917827068869"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 cursor-pointer"
          >
            <FaWhatsapp />
          </a>
           <a
            href="https://www.linkedin.com/in/akshay-raj-chandra-b62707ab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 cursor-pointer"
          >
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          </a>
          
        </div>
      </div>
    </header>
  );
}
