import "./OurApproach.css";

export default function OurApproach() {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "We begin by understanding your child’s developmental history and concerns through discussion and observation.",
      color: "teal",
    },
    {
      id: "02",
      title: "Assessment",
      desc: "A detailed assessment is conducted to evaluate motor, sensory, communication, and functional abilities.",
      color: "pink",
    },
    {
      id: "03",
      title: "Recommendation",
      desc: "We design a personalized therapy plan and guide parents on home activities to support progress.",
      color: "green",
    },
    {
      id: "04",
      title: "Therapy",
      desc: "Therapy focuses on improving movement, communication, and independence with regular progress tracking.",
      color: "red",
    },
  ];

  return (
    <section className="approach">
      <h2 className="approach-title">
        <span className="highlight">Our</span> Approach
      </h2>

      <div className="approach-container">
        {steps.map((step, index) => (
          <div key={step.id} className="approach-wrapper">
            <div className="approach-card">
              <div className={`step-circle ${step.color}`}>
                {step.id}
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>

            {/* Arrow (except last) */}
            {index !== steps.length - 1 && (
              <div className="arrow">→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}