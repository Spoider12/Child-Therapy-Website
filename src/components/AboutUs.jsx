import React, { useState } from 'react';
import './AboutUs.css';


export default function AboutUs({ image }) {
const [open, setOpen] = useState(false);


return (
<section className="about-wrapper">
<div className="about-container">


{/* LEFT SIDE IMAGE */}
<div className="about-image-box">
<img src={image} alt="About Us" className="about-image" />
</div>


{/* RIGHT SIDE CONTENT */}
<div className="about-content display-flex">
<h2 className="about-title">About Us</h2>


<p className="about-text">
We are an innovative, multi‑disciplinary child therapy centre providing therapeutic
services to children with developmental difficulties in a fun learning environment.
</p>


<p className="about-text">
Our team of compassionate and highly qualified therapists has been working with kids and
families to nurture and support motor, cognitive, communication, social and emotional
development in infants, children and youth.
</p>


{/* READ MORE SECTION */}
{open && (
<div className="about-more">
<p>
We provide developmental therapies including:
</p>
<ul>
<li>Autism Spectrum Disorder (ASD) Therapy</li>
<li>Sensory Processing Disorder (SPD) Therapy</li>
<li>Attention Deficit Hyperactivity Disorder (ADHD) Therapy</li>
<li>Speech & Language Therapy</li>
<li>Occupational Therapy</li>
<li>Physiotherapy for motor development</li>
<li>Down Syndrome developmental support</li>
<li>Cerebral Palsy (CP) intervention</li>
<li>Developmental Delay Therapy</li>
<li>Behavioural & Social Skills Training</li>
</ul>
<p>
Our goal is to ensure every child receives personalised care so they can learn,
grow and reach their highest potential.
</p>
</div>
)}


<button className="about-read-more-btn" onClick={() => setOpen(!open)}></button>
</div>
</div>
</section>
);
}

