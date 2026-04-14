import "./Hero.css";
import { useState, useRef, useEffect } from "react";

export default function Hero({ image, footerRef }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const handleContactClick = () => {
    footerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openClinic = () => {
    window.open("https://docs.google.com/forms/...", "_blank");
  };

  const openHome = () => {
    window.open("https://docs.google.com/forms/...", "_blank");
  };

  return (
    <section className="al-hero">
      <div className="al-hero-inner">
        <div className="al-hero-left">
          <h1 className="al-heading">
            Helping Little Steps Lead to Big Achievements.
          </h1>

          <p className="al-subtext">
            ACTIVE LEARNING CDC is a child therapy centre providing therapeutic
            services to premature and developmentally-challenged children.
          </p>

          <div className="al-cta-row">
            {/* Contact */}
            <button
              onClick={handleContactClick}
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition shadow-md"
            >
              Contact Us
            </button>

            {/* Premium Dropdown */}
            <div className="dropdown-container" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="dropdown-btn"
              >
                Book Consultation
                <span className={`arrow ${open ? "rotate" : ""}`}>⌄</span>
              </button>

              <div className={`dropdown-menu ${open ? "show" : ""}`}>
                <button onClick={openClinic} className="dropdown-item">
                  <span>🏥</span>
                  <div>
                    <p className="title">At Clinic</p>
                    <p className="desc">Visit our center for consultation</p>
                  </div>
                </button>

                <button onClick={openHome} className="dropdown-item">
                  <span>🏠</span>
                  <div>
                    <p className="title">At Home</p>
                    <p className="desc">Get therapy at your home</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <p className="al-caption">
            Doctor caption: Expert therapy for premature infants — personalized
            early intervention and family support.
          </p>
        </div>

        <div className="al-hero-right">
          <div className="al-image-frame">
            <img src={image} alt="Therapy session" className="al-image" />
          </div>
        </div>
      </div>
    </section>
  );
}