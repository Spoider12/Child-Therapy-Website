import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    name: "Rahul G.",
    time: "3 months ago",
    text: "I visited Active learning child development centre for my 1 year old daughter suffering from motor development delay. That time my daughter was unable to sit...",
  },
  {
    name: "Anshika G.",
    time: "6 months ago",
    text: "Best in town! He is extremely passionate about treating children, and that truly reflects in his work...",
  },
  {
    name: "Startup C.",
    time: "8 months ago",
    text: "Dr Akshay Raj Chandra sir is the most dedicated and effective pediatric physiotherapist in Noida...",
  },
  {
    name: "FYAD F.",
    time: "10 months ago",
    text: "The best treatment my brother have received in this center. I strongly suggest this place...",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-[#1c1f26] to-[#0f1117] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold leading-snug">
            Why customers love <br />
            Active Learning Child <br />
            Development Centre
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            60+ Users rated us <span className="text-yellow-400 font-bold">5</span> out of 5.
          </p>

          {/* Dummy Avatars */}
          <div className="flex mt-6 space-x-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <img
                key={item}
                src={`https://i.pravatar.cc/40?img=${item}`}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full"
          >
            <FaChevronRight />
          </button>

          {/* Card */}
          <div className="border border-gray-600 p-6 rounded-xl bg-[#1f222a]">
            <h4 className="font-semibold">{testimonials[index].name}</h4>
            <p className="text-gray-400 text-sm">{testimonials[index].time}</p>

            <p className="mt-4 text-gray-300">
              {testimonials[index].text}
            </p>

            <p className="mt-2 text-blue-400 cursor-pointer">
              Read more
            </p>

            {/* Stars */}
            <div className="flex mt-4 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} />
              ))}
            </div>

            {/* Google Icon */}
            <div className="flex justify-end mt-4">
              <FcGoogle size={24} />
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === index ? "bg-white" : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
