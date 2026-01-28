import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            {service.title}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-8">
            {service.intro}
          </p>

          {/* STEP BY STEP */}
          <h2 className="text-2xl font-semibold mb-4">
            Step-by-step Training
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            {service.steps.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* HELPS IN */}
          <h2 className="text-2xl font-semibold mb-4">
            Helps In
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            {service.helpsIn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* BEST FOR */}
          <h2 className="text-2xl font-semibold mb-4">
            Best For Children With
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {service.bestFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="sticky top-28">
          <img
            src={service.image}
            alt={service.title}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
