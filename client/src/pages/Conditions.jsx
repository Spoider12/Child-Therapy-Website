function Conditions() {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Conditions We Treat</h1>

      {/* Neurological & Developmental Conditions */}
      <div style={styles.section}>
        <h2 style={styles.heading}>
          Neurological & Developmental Conditions
        </h2>

        <ul style={styles.list}>
          <li>Cerebral Palsy</li>
          <li>Spastic Diplegia</li>
          <li>Spastic Hemiplegia</li>
          <li>Spastic Quadriplegia</li>
          <li>Dyskinetic Cerebral Palsy</li>
          <li>Ataxic Cerebral Palsy</li>
          <li>Hypotonic Cerebral Palsy</li>
          <li>Autism Spectrum Disorder</li>
          <li>ADHD</li>
          <li>Developmental Delay</li>
          <li>Global Developmental Delay</li>
          <li>Learning Disabilities</li>
          <li>Sensory Processing Difficulties</li>
          <li>Developmental Coordination Disorder (DCD)</li>
          <li>Genetic & Neurological Conditions</li>
          <li>Brain Injury Rehabilitation</li>
          <li>Pediatric Neurological Disorders</li>
          <li>Neuromuscular Disorders</li>
        </ul>
      </div>

      {/* Motor, Balance & Functional Difficulties */}
      <div style={styles.section}>
        <h2 style={styles.heading}>
          Motor, Balance & Functional Difficulties
        </h2>

        <ul style={styles.list}>
          <li>Delayed Motor Milestones</li>
          <li>Delayed Walking</li>
          <li>Toe Walking</li>
          <li>Tip Toe Walking</li>
          <li>Gait Abnormalities</li>
          <li>Frequent Falling While Walking</li>
          <li>Balance & Coordination Difficulties</li>
          <li>Poor Sitting Balance</li>
          <li>Poor Standing Balance</li>
          <li>Poor Trunk Control</li>
          <li>Postural Instability</li>
          <li>Muscle Weakness</li>
          <li>Muscle Tightness</li>
          <li>Spasticity</li>
          <li>Hypotonia</li>
          <li>Hypertonia</li>
          <li>Poor Core Strength</li>
          <li>Difficulty in Walking Independently</li>
          <li>Difficulty in Standing</li>
          <li>Functional Mobility Challenges</li>
          <li>Difficulty in Daily Activities</li>
          <li>Poor Posture</li>
          <li>Joint Stiffness</li>
          <li>Stretching & Mobility Difficulties</li>
        </ul>
      </div>

      {/* Hand Function, Fine Motor & Sensory Difficulties */}
      <div style={styles.section}>
        <h2 style={styles.heading}>
          Hand Function, Fine Motor & Sensory Difficulties
        </h2>

        <ul style={styles.list}>
          <li>Fine Motor Delay</li>
          <li>Gross Motor Delay</li>
          <li>Hand Function Difficulties</li>
          <li>Poor Eye-Hand Coordination</li>
          <li>Bilateral Coordination Difficulties</li>
          <li>Motor Planning Difficulties</li>
          <li>Visual Motor Difficulties</li>
          <li>Sensory Integration Dysfunction</li>
          <li>Retained Primitive Reflexes</li>
        </ul>
      </div>

      {/* Attention & Behavioral Challenges */}
      <div style={styles.section}>
        <h2 style={styles.heading}>
          Attention & Behavioral Challenges
        </h2>

        <ul style={styles.list}>
          <li>Attention & Listening Difficulties</li>
        </ul>
      </div>

      {/* Speech, Communication & Feeding Difficulties */}
      <div style={styles.section}>
        <h2 style={styles.heading}>
          Speech, Communication & Feeding Difficulties
        </h2>

        <ul style={styles.list}>
          <li>Speech & Language Delay</li>
          <li>Communication Difficulties</li>
          <li>Non-Verbal Communication Difficulties</li>
          <li>Oral Motor Difficulties</li>
          <li>Oromotor Dysfunction</li>
          <li>Feeding Difficulties</li>
          <li>Chewing Difficulties</li>
          <li>Swallowing Difficulties</li>
          <li>Drooling Problems</li>
        </ul>
      </div>

      {/* Orthopedic & Neuromuscular Conditions */}
      <div style={styles.section}>
        <h2 style={styles.heading}>
          Orthopedic & Neuromuscular Conditions
        </h2>

        <ul style={styles.list}>
          <li>Clubfoot Rehabilitation</li>
          <li>Flat Foot (Pes Planus)</li>
          <li>In-Toeing Walking</li>
          <li>Out-Toeing Walking</li>
          <li>Knock Knees</li>
          <li>Bow Legs</li>
          <li>Tight Heel Cord / Achilles Tightness</li>
          <li>Scoliosis Related Motor Difficulties</li>
          <li>Spina Bifida</li>
          <li>Erb’s Palsy</li>
          <li>Brachial Plexus Injury</li>
          <li>Muscular Dystrophy (DMD)</li>
          <li>Spinal Muscular Atrophy (SMA)</li>
          <li>Pediatric Gait Disorders</li>
          <li>Pediatric Orthopedic Rehabilitation</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px 80px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    fontFamily: "Georgia, serif",
  },

  mainHeading: {
    textAlign: "center",
    color: "#3f6fb5",
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "50px",
  },

  section: {
    marginBottom: "45px",
  },

  heading: {
    color: "#4b78bd",
    fontSize: "30px",
    marginBottom: "18px",
    fontWeight: "bold",
  },

  list: {
    paddingLeft: "35px",
    lineHeight: "2",
    fontSize: "18px",
    color: "#111",
  },
};

export default Conditions;