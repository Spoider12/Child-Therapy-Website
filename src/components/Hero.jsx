import "./Hero.css";

export default function Hero({ image, footerRef }) {
  const handleContactClick = () => {
    footerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="al-hero">
      <div className="al-hero-inner">
        <div className="al-hero-left">
          <h1 className="al-heading">
           Helping Little Steps Lead to Big Achievements.
          </h1>

          <p className="al-subtext">
            ACTIVE LEARNING CDC is a child therapy centre providing therapeutic
            services to premature and developmentally-challenged children.
          </p>

          <div className="al-cta-row">
            <button
              onClick={handleContactClick}
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Contact Us
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSe9G4vzjQdp6V7GAfojb6DWurpWrfI5DleHJWRuev3lwckKfw/viewform",
                  "_blank"
                )
              }
              className="al-btn ghost"
            >
              Book Consultation
            </button>
          </div>

          <p className="al-caption">
            Doctor caption: Expert therapy for premature infants — personalized
            early intervention and family support.
          </p>
        </div>

        <div className="al-hero-right">
          <div className="al-image-frame">
            <img src={image} alt="Therapy session" className="al-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
