import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from "./pages/Home";

import ServiceDetails from "./pages/ServiceDetails";

export default function App() {
  return (
    <>
      <Header />

      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
