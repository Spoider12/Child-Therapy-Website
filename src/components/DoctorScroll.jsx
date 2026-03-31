import { useEffect, useRef, useState } from "react";
import "./DoctorScroll.css";

const DoctorScroll = () => {
  const sectionRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);                 // play animation
          observer.unobserve(entry.target); // ONLY ONCE
        }
      },
      { threshold: 0.5 } // play when 50% visible
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="doctor-scroll">
      <img
        src="/Passport Photo.jpeg"
        alt="Doctor"
        className={`doctor-img ${play ? "img-animate" : ""}`}
      />

      <h2 className={`doctor-name ${play ? "text-animate" : ""}`}>
        <strong>Dr. Akshay Raj Chandra </strong> – Senior Pediateric PhyseioTherapist
      </h2>
    </div>
  );
};

export default DoctorScroll;
