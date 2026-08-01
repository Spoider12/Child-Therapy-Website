import { useState, useRef, useEffect } from "react";
import bgImage from "../assets/updatedcontact.png";
import { apiRequest } from "../api/http";

const services = [
  "Pediatric Physiotherapy",
  "Occupational Therapy",
  "Speech Therapy",
  "DMI Therapy",
  "Special Education",
  "Sensory Integration Therapy",
  "Behavior Therapy",
];

export default function ContactForm() {
  const [service, setService] = useState("");
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState("loading");
    setFeedback("");

    try {
      const data = await apiRequest("/contacts", {
        method: "POST",
        body: JSON.stringify({ name, phone, email, service, message }),
      });

      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setMessage("");
      setSubmitState("success");
      setFeedback(data.message || "Message submitted. Our team will contact you soon.");
    } catch (error) {
      console.log(error);
      setSubmitState("error");
      setFeedback(error.message || "Failed to send message");
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Early Support Can <br /> Make a Big Difference.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Our experts guide you with the right therapy programs for your
            child's physical, emotional and cognitive development.
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full bg-transparent border-b-2 border-gray-400 text-white py-3 focus:outline-none focus:border-blue-500"
            />

            <label className="absolute left-0 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-sm">
              Email Address
            </label>
          </div>

          <div ref={dropdownRef} className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="peer w-full cursor-pointer bg-transparent border-b-2 border-gray-400 py-3 text-white flex justify-between items-center"
            >
              <span className={service ? "text-white" : "text-gray-400"}>
                {service || "Select Service"}
              </span>

              <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
                v
              </span>
            </div>

            <div
              className={`absolute z-30 mt-2 w-full rounded-xl overflow-hidden
              backdrop-blur-xl bg-black/80 border border-white/10 shadow-xl
              transition-all duration-300 ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {services.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setService(item);
                    setOpen(false);
                  }}
                  className="px-4 py-3 text-gray-300 hover:bg-blue-600 hover:text-white transition cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <textarea
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="peer w-full bg-transparent border-b-2 border-gray-400 text-white py-3 focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>

            <label className="absolute left-0 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 peer-valid:-top-3 peer-valid:text-sm">
              Your Message
            </label>
          </div>

          {feedback && (
            <p className={submitState === "error" ? "text-red-300" : "text-green-300"}>
              {feedback}
            </p>
          )}

          <button
            type="submit"
            disabled={submitState === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold tracking-wide transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}