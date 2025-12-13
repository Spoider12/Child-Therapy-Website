import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [showServices, setShowServices] = useState(false);

  const menuItems = ["Home", "About Us", "Services", "Gallery", "Blog", "Contact Us"];

  return (
    <header className="w-full bg-[#181a1b] text-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="ChatGPT Image Dec 7, 2025, 03_00_49 AM.png"
            alt="Active Learning CDC"
            className="h-14 object-contain"
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
                      <li>Speech Therapy</li>
                      <li>Physical Therapy</li>
                      <li>Behavior Therapy</li>
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
        </div>

      </div>
    </header>
  );
}
