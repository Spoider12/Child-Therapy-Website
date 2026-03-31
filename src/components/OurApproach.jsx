const steps = [
  {
    title: "Consultation",
    text: "We begin by understanding your child’s developmental history and your concerns. Through discussion and observation, we identify areas where your child may need support and guide you on the next steps.",
    bg: "bg-teal-200",
  },
  {
    title: "Assessment",
    text: "A detailed assessment is conducted to evaluate your child’s motor, sensory, communication, and functional abilities. This helps us understand strengths, challenges, and developmental levels accurately.",
    bg: "bg-pink-300",
  },
  {
    title: "Recommendation",
    text: "Based on assessment findings, we design an individualized therapy plan, recommend session frequency, and guide parents on home activities to support progress",
    bg: "bg-teal-200",
  },
  {
    title: "Therapy",
    text: "Therapy sessions focus on improving movement, functional skills, communication, and independence. We regularly monitor progress and train parents to continue support at home",
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
