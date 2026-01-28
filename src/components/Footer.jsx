import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat text-white"
      
    >
      {/* DARK OVERLAY */}
      <div className="bg-black/80">
        
        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LOGO */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-3">
              ACTIVE LEARNING CDC
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Active Learning Child Therapy Center
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300">(+91) 078270 68869</p>
            <p className="text-sm text-gray-300">(+91) 96544 52126</p>
            <p className="text-sm text-gray-300 mb-3">(+91) 120 421 3663</p>
            <p className="text-sm text-gray-300">
              A 295, Sector 46, Noida <br />
              Uttar Pradesh 201301
            </p>
            <p className="text-sm mt-2 text-gray-300">
              activelearningcdc@gmail.com
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Site Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition">
                <FaYoutube />
              </a>
              <a className="w-11 h-11 bg-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="bg-black/90 text-center py-4 text-sm text-gray-400">
          © 2026 – All Rights Reserved by Active Learning CDC
        </div>

      </div>
    </footer>
  );
};

export default Footer;
