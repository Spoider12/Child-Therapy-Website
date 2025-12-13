
import './Hero.css';

export default function Hero({ image, onContactClick }) {
  return (
    <section className="al-hero">
      <div className="al-hero-inner">
        <div className="al-hero-left">
          <h1 className="al-heading">Helping children reach their full potential.</h1>
          <p className="al-subtext">
            ACTIVE LEARNING CDC is a child therapy centre providing therapeutic services to premature
            and developmentally-challenged children. We focus on motor skills, sensory integration,
            speech & language milestones with compassionate, evidence-based care.
          </p>

          <div className="al-cta-row">
            <button className="al-btn" onClick={onContactClick || (() => {})}>Contact Us</button>
            <button className="al-btn ghost">Book Consultation</button>
          </div>

          <p className="al-caption">Doctor caption: Expert therapy for premature infants — personalized early intervention and family support.</p>
        </div>

        <div className="al-hero-right">
          {/* image should be imported in parent and passed as prop like: <Hero image={heroImg} /> */}
          <div className="al-image-frame">
            <img src={image} alt="Therapy session" className="al-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
