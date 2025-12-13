import bgImage from "../assets/contact-bg.jpg";

export default function ContactForm() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 mb-10">
          Leave us a message using the form below, and we’ll get back to you.
        </p>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm">
              Your name (required)
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-amber-100"
              required
            />
          </div>

          {/* Phone */}
          <div className="">
            <label className="block mb-2 text-sm">
              Phone (required)
            </label>
            <input
              type="tel"
              placeholder="+123456789"
              className="w-full px-4 py-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-amber-200"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm">
              Your email (required)
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm">
              Your message
            </label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
