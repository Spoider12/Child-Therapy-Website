const steps = [
  {
    title: "Consultation",
    text: "This entails reviewing developmental history, understanding parental concerns, & conducting behavioral observation to identify the child’s therapy needs.",
    bg: "bg-teal-200",
  },
  {
    title: "Assessment",
    text: "Administration of standardized tests to determine developmental levels and functional strengths.",
    bg: "bg-pink-300",
  },
  {
    title: "Recommendation",
    text: "This outlines a goal-oriented therapy plan, defines session frequency, and ensures coordinated care across specialists.",
    bg: "bg-teal-200",
  },
  {
    title: "Therapy",
    text: "Implementing targeted interventions, monitoring progress, and equipping parents with strategies for home support.",
    bg: "bg-pink-300",
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold mb-16">
        <span className="text-orange-500">Our</span>{" "}
        <span className="text-blue-900">Approach</span>
      </h2>

      {/* Circles */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative ${step.bg} rounded-full w-72 h-72 mx-auto flex flex-col items-center justify-center text-center p-6 shadow-lg`}
          >
            {/* Decorative dots */}
            <span className="absolute top-4 right-6 w-3 h-3 bg-gray-700 rounded-full"></span>
            <span className="absolute bottom-6 left-6 w-3 h-3 bg-gray-700 rounded-full"></span>

            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
