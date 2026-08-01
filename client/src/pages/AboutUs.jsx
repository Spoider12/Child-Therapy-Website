import aboutImg from "../assets/about.jpg.png"; // replace with your image path

function AboutUs() {
  return (
    <div style={styles.container}>
      {/* Heading */}
      <div style={styles.headingContainer}>
        <h1 style={styles.mainHeading}>About Us</h1>
        <div style={styles.line}></div>
      </div>

      {/* Content Section */}
      <div style={styles.contentWrapper}>
        
      {/* Left Side Text */}
<div style={styles.textSection}>
  <h2 style={styles.title}>
    Active Learning Child Development Centre
  </h2>

  <p style={styles.paragraph}>
    Active Learning Child Development Centre is a pediatric therapy and
    rehabilitation centre in Noida dedicated to supporting children with
    developmental, neurological, sensory, motor, speech, and learning
    challenges through individualized and evidence-based therapy programs
    in a child-friendly and supportive environment.
  </p>

  <h3 style={styles.subHeading}>Common Parent Concerns</h3>

  <p style={styles.paragraph}>
    Many parents come to us with concerns such as:
  </p>

  <ul style={styles.list}>
    <li>“My child is not walking yet at 2 years of age”</li>
    <li>“My child is not speaking yet”</li>
    <li>“My child has poor eye contact”</li>
    <li>“My child falls frequently while walking”</li>
  </ul>

  <p style={styles.paragraph}>
    We understand how stressful and confusing developmental concerns can
    feel for families. Our multidisciplinary therapy team works closely
    with children and parents to support motor development,
    communication, posture, gait, sensory processing, hand function,
    feeding skills, learning abilities, and independence in daily
    activities.
  </p>

  <h3 style={styles.subHeading}>Therapy Services</h3>

  <p style={styles.paragraph}>
    We provide Pediatric Physiotherapy, Occupational Therapy, Speech
    Therapy, Feeding Therapy, Sensory Integration Therapy, Special
    Education, and Early Intervention services for children with
    Cerebral Palsy, Autism Spectrum Disorder, ADHD, Developmental Delay,
    Hypotonia, Learning Disabilities, and neurological conditions.
  </p>

  <h3 style={styles.subHeading}>Our Therapy Approach</h3>

  <p style={styles.paragraph}>
    Our therapy programs include Neurodevelopmental Therapy (NDT),
    Dynamic Movement Intervention (DMI), Balance & Gait Training, Oral
    Motor Therapy, Fine Motor Training, Stretching & Strengthening
    Exercises, Functional Rehabilitation, and task-oriented developmental
    activities tailored to each child’s functional needs and
    developmental goals.
  </p>
</div>
        {/* Right Side Image */}
        <div style={styles.imageSection}>
          <div style={styles.imageBorder}>
            <img
              src={aboutImg}
              alt="About Us"
              style={styles.image}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f5f7fa",
    padding: "60px 80px",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },

  headingContainer: {
    textAlign: "center",
    marginBottom: "60px",
  },

  mainHeading: {
    fontSize: "52px",
    fontWeight: "700",
    color: "#0b1533",
    marginBottom: "10px",
  },

  line: {
    width: "100px",
    height: "5px",
    backgroundColor: "#1ea7ff",
    margin: "0 auto",
    borderRadius: "10px",
  },

  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
  },

  textSection: {
    flex: "1",
    minWidth: "350px",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  },

  title: {
    fontSize: "42px",
    color: "#1ea7ff",
    marginBottom: "25px",
    lineHeight: "1.2",
    fontWeight: "700",
  },

  paragraph: {
    fontSize: "20px",
    lineHeight: "1.9",
    color: "#4b5563",
    marginBottom: "25px",
  },

  subHeading: {
    fontSize: "32px",
    color: "#0b1533",
    marginBottom: "15px",
    fontWeight: "700",
  },

  imageSection: {
    flex: "1",
    minWidth: "350px",
    display: "flex",
    justifyContent: "center",
  },

  imageBorder: {
    border: "6px solid orange",
    borderRadius: "30px",
    padding: "15px",
  },

  image: {
    width: "100%",
    maxWidth: "650px",
    borderRadius: "25px",
    objectFit: "cover",
  },
};

export default AboutUs;