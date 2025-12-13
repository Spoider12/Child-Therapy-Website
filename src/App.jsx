import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import AboutUs from "./components/AboutUs";
import aboutImage from "./assets/about.jpg.png";
import Hero from "./components/Hero";
import heroImg from "./assets/WhatsApp Image 2025-12-07 at 19.58.33_3b45b86f.jpg";
import Footer from "./components/Footer";
import Services from "./components/services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";


 export default function App() {
  function handleContact() {
    // you can wire this to open a modal, navigate, or scroll to contact form
    alert('Contact click — open contact form or navigate to /contact');
  }

  return (
    <>
      <Header />
     
       <Hero image={heroImg} onContactClick={handleContact} />
       <AboutUs image={aboutImage} />
       {/* NAVBAR SECTION */}
         <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          background: "#003B95",
          color: "white",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About Us
        </Link>
      </nav>

      {/* PAGE ROUTES SECTION */}
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
    <Services/>
    <Testimonials/>
    <ContactForm/>
    <Footer />
    </>
  );
}


