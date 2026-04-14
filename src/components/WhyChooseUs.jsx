import { FaHandsHelping, FaBrain, FaUserFriends, FaAward } from "react-icons/fa";

const reasons = [
  {
    icon: FaHandsHelping,
    title: "Compassionate Care",
    description:
      "Therapies are delivered with warmth, empathy, and sensitivity to every child’s needs.",
  },
  {
    icon: FaBrain,
    title: "Evidence-Based Programs",
    description:
      "We use proven early intervention and therapy methods to support measurable progress.",
  },
  {
    icon: FaUserFriends,
    title: "Family-Centered Support",
    description:
      "Parents are guided at every step, with home plans and training to reinforce progress.",
  },
  {
    icon: FaAward,
    title: "Trusted Expertise",
    description:
      "Our experienced team of specialists helps children build strength, confidence, and independence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-slate-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mx-auto max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A trusted partner for your child’s early growth and development.
          </h2>
          <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed">
            We combine expert care, evidence-based therapy, and family-guided support to help children thrive.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div className="group rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-cyan-300/10 text-cyan-300 mb-6 text-2xl">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
