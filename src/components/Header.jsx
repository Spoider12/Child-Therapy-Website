import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "About Us", "Services", "Gallery", "Blog", "Contact Us"];

  return (
    <header className="w-full bg-[#181a1b] text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="ChatGPT Image Dec 7, 2025, 03_00_49 AM.png"
            alt="Active Learning CDC"
            className="h-14 object-contain "
          />
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-10">
  {menuItems.map((item) => (
    <div
      key={item}
      className="flex flex-col items-center group cursor-pointer"
      onMouseEnter={() => setActive(item)} // optional: if you want hover to activate
    >
      <button
        className={`text-sm font-medium ${
          active === item ? "text-blue-400" : "text-gray-300"
        } group-hover:text-blue-300 transition-colors`}
      >
        {item}
        {item === "Services" && <span className="ml-1">▼</span>}
      </button>

      {/* Hover Underline */}
      <div
        className="w-0 h-[2px] bg-blue-500 mt-1 group-hover:w-full transition-all duration-300"
      ></div>

      {/* Active underline */}
      {active === item && (
        <div className="w-full h-[2px] bg-blue-500 -mt-[2px]"></div>
      )}
    </div>
  ))}
</nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-gray-300 text-lg">
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
          <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
