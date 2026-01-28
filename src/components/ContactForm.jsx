import bgImage from "../assets/contact-bg.jpg";

export default function ContactForm() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="text-white">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Let’s Talk About <br />
            Your Child’s Growth
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Our experts are here to guide you with the right therapy
            programs for your child’s physical, emotional and cognitive
            development.
          </p>
        </div>

        {/* RIGHT FORM (BLENDED STYLE) */}
        <form className="space-y-6">

          {/* INPUT GROUP */}
          <div className="relative">
            <input
              type="text"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-400 text-white py-3 focus:outline-none focus:border-blue-500"
            />
            <label className="absolute left-0 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-sm">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-400 text-white py-3 focus:outline-none focus:border-blue-500"
            />
            <label className="absolute left-0 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-sm">
              Phone Number
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-400 text-white py-3 focus:outline-none focus:border-blue-500"
            />
            <label className="absolute left-0 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-sm">
              Email Address
            </label>
          </div>

          <div className="relative">
            <textarea
              rows="4"
              required
              className="peer w-full bg-transparent border-b-2 border-gray-400 text-white py-3 focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>
            <label className="absolute left-0 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-sm">
              Your Message
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold tracking-wide transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
