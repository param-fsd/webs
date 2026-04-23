"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Landmark,
  MapPinned,
  Building2,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: <Building2 size={22} />,
    title: "Infrastructure & Engineering",
    desc: "Built to endure. Roads, drainage, and utilities designed to exceed municipal expectations.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Integrity & Transparency",
    desc: "Zero-deviation execution. What you see on the map is exactly what exists on the ground.",
  },
  {
    icon: <MapPinned size={22} />,
    title: "Intelligence & ROI",
    desc: "Data-driven plotted developments located in Bangalore’s next growth corridors.",
  },
  {
    icon: <Landmark size={22} />,
    title: "Inheritance & Long-term Value",
    desc: "Land as a legacy. A secure future for families seeking enduring value.",
  },
];

const directors = [
  {
    name: "Surendra R.",
    role: "Director - Vizipa Constructions Pvt. Ltd.",
    image: "/director-surendra.jpeg",
    intro:
      "Born, educated, and nurtured in Bangalore, Surendra has witnessed the city's transformation from a retiree haven to the vibrant global hub it is today firsthand.",
    paragraphs: [
      "With intimate involvement in its development, he possesses a unique ability to foresee property trends, identifying prime locations long before the surge of apartment complexes and office spaces.",
      "He has developed and perfected land parcels around Bangalore over several decades and brings his vast experience in dealing with titles, technicalities, rules, regulations and byelaws.",
    ],
    bringsTitle: "What does he bring to Vizipa?",
    bringsDesc:
      "Surendra's keen eye for quality and his knack for recognizing emerging materials and practices in the industry stem from his penchant for learning from global techniques. He remains steadfast in his commitment to delivering excellence, maintaining an unwavering focus on his goals regardless of the challenges encountered along the way.",
  },
  {
    name: "Arun Viswanath",
    role: "Director - Vizipa Constructions Pvt. Ltd.",
    image: "/director-arun.jpg",
    intro:
      "Arun, a native of Bangalore, embodies the fusion of global thinking and hands-on industry experience, making him a formidable force in the corporate world. After completing his Mechanical Engineering, it was his pursuit of knowledge and excellence that led him to expand his horizons beyond borders.",
    paragraphs: [
      "Arun then delved into the complexities of System Engineering, earning his Master's degree with honors. This academic journey not only broadened his understanding but also instilled in him a deep-rooted passion for innovation and problem-solving.",
      "Upon graduation, Arun embarked on a professional odyssey that traversed continents and industries. His tenure as an engineer in Australia spanned over three years. Here, he honed his skills in operations and project management, leveraging his technical expertise to oversee the successful execution of complex engineering projects.",
      "Driven by a desire to move back home to India, Arun made a short transition at the Project Management team in R&D division of Mahindra & Mahindra.",
      "Arun's journey is characterized by a relentless pursuit of excellence, a commitment to lifelong learning, and a global perspective that enriches his leadership ethos. His diverse experiences, ranging from hands-on engineering to strategic program management, equip him with a multifaceted approach to tackling challenges and driving organizational growth.",
    ],
    bringsTitle: "What does he bring to Vizipa?",
    bringsDesc:
      "As a director of Vizipa, Arun brings to the table a unique blend of technical acumen, strategic vision, and cross-cultural competency. His leadership is marked by a collaborative spirit, an unwavering dedication to quality, and a penchant for innovation, making him a catalyst for transformation and success in any endeavor he undertakes.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell page-top-space">
      <section className="page-hero small-page-hero">
        <p className="eyebrow">About Vizipa</p>
        <h1>The Philosophy of Home</h1>
        <p className="page-lead max-3xl">
          At Vizipa, construction isn’t just about structures; it is about the
          sanctity of home. We bridge aspirational living with practical
          investment through plotted developments rooted in reliability,
          transparency, and long-term value.
        </p>
      </section>

      <section className="about-grid two-col-grid section-gap">
        <div>
          <h2>Our Story</h2>
          <p>
            Vizipa Constructions is built on the belief that every plotted
            development should offer clarity, confidence, and future-ready
            value. We focus on well-planned communities, legally transparent
            processes, and precision execution that reduces uncertainty for
            buyers.
          </p>
          <p>
            Our promise is simple: a hassle-free path to land ownership in
            Bangalore’s most promising corridors.
          </p>
        </div>

        <div className="image-card luxury-card overflow-hidden">
          <Image
            src="/about-image.jpg"
            alt="Vizipa premium plotted development"
            width={1200}
            height={900}
            className="cover-image"
          />
        </div>
      </section>

    

      <section className="section-gap">
        <div className="section-title-wrap">
          <p className="eyebrow">Leadership</p>
          <h2>Our Directors</h2>
        </div>

        <div className="directors-stack">
          {directors.map((person) => (
            <article
              className="luxury-card director-profile-card"
              key={person.name}
            >
              <div className="director-profile-grid">
                <div className="director-image-wrap">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={900}
                    height={1100}
                    className="director-image"
                  />
                </div>

                <div className="director-content-wrap">
                  <div className="director-top">
                    <p className="director-label">Leadership</p>
                    <h3>{person.name}</h3>
                    <p className="role-line">{person.role}</p>
                  </div>

                  <div className="director-copy">
                    <p className="director-intro">{person.intro}</p>

                    {person.paragraphs.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}

                    <div className="director-highlight-box">
                      <div className="director-highlight-head">
                        <span className="director-highlight-icon">
                          <ArrowRight size={14} />
                        </span>
                        <h4>{person.bringsTitle}</h4>
                      </div>
                      <p>{person.bringsDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
        <section className="section-gap">
        <div className="section-title-wrap">
          <p className="eyebrow">Brand Matrix</p>
          <h2>The Vizipa Benchmark</h2>
        </div>

        <div className="card-grid four-grid">
          {pillars.map((item) => (
            <div className="luxury-card feature-card" key={item.title}>
              <div className="icon-wrap">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}