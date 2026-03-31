import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Services from "./components/Services";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      {/* padding for fixed navbar */}
      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      
    </>
  );
}
