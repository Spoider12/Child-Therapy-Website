import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useRef } from "react";
import Services from "../components/Services";
import DoctorScroll from "../components/DoctorScroll";
import Testimonals from "../components/Testimonals";
import ContactForm from "../components/ContactForm";
import heroImg from "../assets/WhatsApp Image 2025-12-07 at 19.58.33_3b45b86f.jpg";
import OurApproach from "../components/OurApproach";


export default function Home() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth", block : "start" });
  };
  return (
    <>
      <Hero image={heroImg} footerRef={footerRef} />
      
      <DoctorScroll />
     
      <Services />
      <OurApproach />
     <Testimonals/>
      <ContactForm />
      {/* Footer must be here */}
      <Footer footerRef={footerRef} />
      

    </>
  );
}
