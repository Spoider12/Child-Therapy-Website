import { Link } from "react-router-dom";
import { FaStar, FaHandsHelping } from "react-icons/fa";

const services = [
  {
    title: "Paediatric Physiotherapy",
    desc: "The primary goal of occupational therapy is to enable children to participate in meaningful daily activities that support independence and confidence.",
    slug: "paediatric-physiotherapy",
    served: "1,250+ sessions",
    rating: 4.9,
  },
  {
    title: "Occupational Therapy",
    desc: "Our Occupational Therapy program helps children improve fine motor skills, sensory processing, focus, behavior, daily living activities and school readiness.",
    slug: "occupational-therapy",
    served: "980+ sessions",
    rating: 4.8,
  },
  {
    title: "Gait Training",
    desc: "Our Gait Training program focuses on improving walking patterns, balance, coordination and strength for children with mobility challenges. We use advanced techniques to help children walk more confidently and independently.",
    slug: "gait-training-for-children",
    
  },
  {
    title: "Cerebal Palsy Rehabilitation",
    desc: "Our Cerebral Palsy Rehabilitation program provides specialized therapies to improve motor function, muscle tone, coordination and overall quality of life for children with cerebral palsy. We create personalized plans to help each child reach their full potential.",
    slug: "cerebral-palsy-rehabilitation",
    
  },
  {
    title: "Special Education",
    desc: "Our Special Education program supports children who need help with learning skills, attention, academic foundation, communication and behavior management. We create individualized learning plans to help children achieve better performance in school and daily life.",
    slug: "Special-Education",
    served: "860+ sessions",
    rating: 4.8,
  },
  {
    title: "Early Intervention Program",
    desc: "Our Early Intervention Program is designed for children aged 0–6 years to support early development in motor milestones, speech, sensory integration, behavior and learning skills. Early therapy gives the best long-term results.",
    slug: "Early-Intervention",
    served: "1,400+ sessions",
    rating: 4.9,
  },
  {
    title: "Hand Function & Fine Motor Training",
    desc: "Our hand function program improves finger strength, grip, coordination, dexterity and fine motor control, helping children perform school and daily activities confidently.",
    slug: "Hand-Function",
    served: "620+ sessions",
    rating: 4.7,
  },
  {
    title: "Speech Therapy",
    desc: "Our Speech Therapy helps children improve speech clarity, language development, communication skills, understanding, and oral motor functions. We help children speak confidently and interact better socially.",
    slug: "Speech-Therapy",
    served: "1,020+ sessions",
    rating: 4.8,
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 mb-3">
            Our Services
          </p>
          <h2 className="text-4xl font-bold">
            Therapy programs designed for every stage of your child’s growth.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 h-full flex flex-col"
            >
              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 mb-6">
                  <div className="rounded-2xl bg-slate-100/80 p-3">
                    <div className="flex items-center gap-2 font-semibold text-slate-800">
                      <FaHandsHelping className="text-sky-500" />
                      Therapies
                    </div>
                    <p className="mt-2 text-slate-600">{service.served}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100/80 p-3">
                    <div className="flex items-center gap-2 font-semibold text-slate-800">
                      <FaStar className="text-amber-400" />
                      Rating
                    </div>
                    <p className="mt-2 text-slate-600">{service.rating} / 5.0</p>
                  </div>
                </div>

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
