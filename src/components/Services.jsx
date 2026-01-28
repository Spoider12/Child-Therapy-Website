import { Link } from "react-router-dom";

const services = [
  {
    title: "Paediatric Physiotherapy",
    desc: "The primary goal of occupational therapy is to enable children to participate in meaningful daily activities that support independence and confidence.",
    slug: "paediatric-physiotherapy",
  },
  {
    title: "Occupational Therapy",
    desc: "Our Occupational Therapy program helps children improve fine motor skills, sensory processing, focus, behavior, daily living activities and school readiness.",
    slug: "occupational-therapy",
  },
  {
    title: "DMI Therapy (Dynamic Movement Intervention)",
    desc: "DMI is an advanced physiotherapy approach that helps children improve posture control, strength, balance reactions and movement transitions.",
    slug: "dmi-therapy",
  },
   {
    title: "Special Education",
    desc: "Our Special Education program supports children who need help with learning skills, attention, academic foundation, communication and behavior management. We create individualized learning plans to help children achieve better performance in school and daily life.",
    slug: "Special-Education",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Services
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300
                         h-full flex flex-col"
            >
              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* PUSH BUTTON TO BOTTOM */}
                <div className="mt-auto">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
