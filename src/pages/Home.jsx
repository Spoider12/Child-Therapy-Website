import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import DoctorScroll from "../components/DoctorScroll";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

import heroImg from "../assets/WhatsApp Image 2025-12-07 at 19.58.33_3b45b86f.jpg";
import aboutImage from "../assets/about.jpg.png";

export default function Home() {
  return (
    <>
      <Hero image={heroImg} />
      <AboutUs image={aboutImage} />
      <DoctorScroll />
      <Stats />
      <Services />
      <Testimonials />
      <ContactForm />
    </>
  );
}
