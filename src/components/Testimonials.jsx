import { FaQuoteLeft, FaStar } from "react-icons/fa";

import parent1 from "../assets/parent1.jpg";


export default function Testimonials() {
  const reviews = [
    {
      text: "",
      name: "Parent of Aarav",
      img: parent1,
    },
    {
      text: "We have been associated with Tickles for more than 5 years. The therapists are extremely caring and professional. My child has shown tremendous growth in cognitive and motor development.",
      name: "Lopa",
      
    },
    {
      text: "Excellent therapy center. My daughter has been attending sessions for 5 years and we have seen amazing improvement. Thank you Tickles team!",
      name: "Tandra Tripathi",
      
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Customer Testimonials
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative"
            >
              {/* QUOTE ICON */}
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />

              {/* TEXT */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {review.text}
              </p>

              {/* USER INFO */}
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{review.name}</p>

                  {/* STARS */}
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
