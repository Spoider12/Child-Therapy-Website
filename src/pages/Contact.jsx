import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full min-h-screen px-6 py-12">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        {/* Address */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Office Address</h3>
          <p>
            A 295 A Block, Sector 46 <br />
            Noida, Uttar Pradesh 201301
          </p>
        </div>

        {/* Phone */}
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Call us</h3>
          <p>We’re just a call away!</p>
          <a
            href="tel:+917827068869"
            className="text-blue-600 font-medium"
          >
            +91 78270 68869
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=A%20295%20A%20Block%20Sector%2046%20Noida&output=embed"
          className="w-full h-full border rounded-lg"
          loading="lazy"
        ></iframe>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
