import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGoogle,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const [active, setActive] = useState("Home");
  const [showServices, setShowServices] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Gallery",
    "Blog",
    "Contact Us",
  ];

  /* ================= SCROLL HIDE HEADER ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(!(currentScrollY > lastScrollY && currentScrollY > 80));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ================= CLOSE DROPDOWN WHEN CLICK OUTSIDE ================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================= NAVIGATION ================= */
  const handleNavigation = (item) => {
    setActive(item);

    if (item === "Services") {
      setShowServices(!showServices);
      return;
    }

    setShowServices(false);
    setMobileMenu(false);

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
          className="h-14 md:h-20 object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* ================= DESKTOP MENU ================= */}
        <nav
          ref={dropdownRef}
          className="hidden md:flex items-center gap-10 relative"
        >
          {menuItems.map((item) => (
            <div key={item} className="relative">
              <button
                onClick={() => handleNavigation(item)}
                className={`text-sm font-medium ${
                  active === item ? "text-white" : "text-gray-300"
                } hover:text-white transition-colors`}
              >
                {item}
              </button>

              {/* ===== DESKTOP SERVICES DROPDOWN ===== */}
              {item === "Services" && showServices && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-6 
                                w-[750px] bg-white text-black 
                                rounded-2xl shadow-2xl p-10 
                                grid grid-cols-3 gap-10">
                  
                  {/* Therapies */}
                  <div>
                    <h3 className="text-blue-600 font-semibold mb-4 text-lg">
                      Therapies
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="hover:text-blue-600 cursor-pointer">Occupational Therapy</li>
                      <li className="hover:text-blue-600 cursor-pointer">Paediatric Physiotherapy</li>
                      <li className="hover:text-blue-600 cursor-pointer">Special Education Therapy</li>
                      <li className="hover:text-blue-600 cursor-pointer">Speech & Language Therapy</li>
                    </ul>
                  </div>

                  {/* Programs */}
                  <div>
                    <h3 className="text-blue-600 font-semibold mb-4 text-lg">
                      Programs
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="hover:text-blue-600 cursor-pointer">Early Intervention</li>
                      <li className="hover:text-blue-600 cursor-pointer">Sensory Integration</li>
                      <li className="hover:text-blue-600 cursor-pointer">Special Education</li>
                      <li className="hover:text-blue-600 cursor-pointer">Parent Training</li>
                    </ul>
                  </div>

                  {/* Support */}
                  <div>
                    <h3 className="text-blue-600 font-semibold mb-4 text-lg">
                      Support
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="hover:text-blue-600 cursor-pointer">Assessment</li>
                      <li className="hover:text-blue-600 cursor-pointer">Counselling</li>
                      <li className="hover:text-blue-600 cursor-pointer">Group Therapy</li>
                      <li className="hover:text-blue-600 cursor-pointer">Tele Therapy</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ================= DESKTOP ICONS ================= */}
        <div className="hidden md:flex items-center gap-4 text-gray-300 text-lg">
          <a href="tel:+917827068869"><FaPhoneAlt /></a>
          <a href="https://wa.me/917827068869" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://maps.app.goo.gl/MDCF7pGss8hTgKH7A" target="_blank" rel="noreferrer"><FaGoogle /></a>
          <a href="https://www.instagram.com/drchandrapt" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/akshay-raj-chandra-b62707ab" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <div className="md:hidden text-white text-2xl">
          {mobileMenu ? (
            <FaTimes onClick={() => setMobileMenu(false)} />
          ) : (
            <FaBars onClick={() => setMobileMenu(true)} />
          )}
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="md:hidden bg-black text-white px-6 py-6 space-y-6">

          {menuItems.map((item) => (
            <div key={item}>
              <div
                onClick={() => {
                  if (item === "Services") {
                    setMobileServices(!mobileServices);
                  } else {
                    handleNavigation(item);
                  }
                }}
                className="cursor-pointer text-lg flex justify-between items-center"
              >
                {item}
                {item === "Services" && <span>{mobileServices ? "▲" : "▼"}</span>}
              </div>

              {/* Mobile Services Dropdown */}
              {item === "Services" && mobileServices && (
                <div className="pl-4 mt-4 space-y-3 text-gray-300">
                  <p>Occupational Therapy</p>
                  <p>Paediatric Physiotherapy</p>
                  <p>Special Education Therapy</p>
                  <p>Speech & Language Therapy</p>
                  <p>Early Intervention</p>
                  <p>Sensory Integration</p>
                  <p>Parent Training</p>
                  <p>Assessment</p>
                  <p>Counselling</p>
                  <p>Group Therapy</p>
                  <p>Tele Therapy</p>
                </div>
              )}
            </div>
          ))}
                    {/* ================= MOBILE SOCIAL ICONS ================= */}
          <div className="flex justify-center gap-6 pt-6 border-t border-gray-700 text-xl">
            <a href="tel:+917827068869">
              <FaPhoneAlt className="hover:text-green-400 transition" />
            </a>

            <a
              href="https://wa.me/917827068869"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 transition" />
            </a>

            <a
              href="https://maps.app.goo.gl/MDCF7pGss8hTgKH7A"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogle className="hover:text-red-500 transition" />
            </a>

            <a
              href="https://www.instagram.com/drchandrapt"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/akshay-raj-chandra-b62707ab"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>
          </div>


        </div>
      )}
    </header>
  );
}
