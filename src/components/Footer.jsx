import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#eef3f7] text-gray-800">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        </div>

        {/* LOGO + TAGLINE */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-3">
           ACTIVE LEARNING CDC
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Therapeutic Innovative Centre for Kids <br />
            Learning, Enhancement & Support
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">(+91) 078270 68869</p>
          <p className="text-sm mb-2">(+91) 96544 52126</p>
          <p className="text-sm mb-4">(+91) 120 421 3663</p>

          <p className="text-sm mb-2">
            A 295, A Block, Sector 46, Noida, Uttar Pradesh 201301 <br />
            H936+C2 Noida, Uttar Pradesh
          </p>

          <p className="text-sm mt-2">
            contact@tickleschildtherapy.com
          </p>
        </div>

        {/* SITE LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Site Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-700">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-700">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-700">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-700">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-blue-700">Blog</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

  <div className="flex gap-4 mb-4">
    
    {/* Facebook */}
    <a
      href="#"
      className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
    >
      <FaFacebookF size={18} />
    </a>

    {/* YouTube */}
    <a
      href="#"
      className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition"
    >
      <FaYoutube size={20} />
    </a>

    {/* Instagram */}
    <a
      href="#"
      className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition"
    >
      <FaInstagram size={18} />
    </a>

  </div>
</div>


      {/* BOTTOM BAR */}
      <div className="bg-black text-white text-center py-4 text-sm">
        © 2021 – All Rights Reserved by TICKLES Child Therapy
      </div>

    </footer>
  );
};

export default Footer;
