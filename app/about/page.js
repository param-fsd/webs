import Image from "next/image";
import { ShieldCheck, Landmark, MapPinned, Building2 } from "lucide-react";

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
    desc: "Born, educated, and nurtured in Bangalore, Surendra has witnessed the city’s transformation firsthand. With decades of deep involvement in land development, titles, technicalities, rules, regulations, and byelaws, he brings extraordinary foresight, quality focus, and delivery discipline to every Vizipa development.",
  },
  {
    name: "Arun Viswanath",
    role: "Director - Vizipa Constructions Pvt. Ltd.",
    desc: "A Bangalore native with global exposure, Arun blends engineering depth, systems thinking, and project management expertise. With experience spanning Australia and India, he brings innovation, cross-cultural perspective, strategic vision, and a relentless focus on excellence to Vizipa’s growth journey.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell page-top-space">
      <section className="page-hero small-page-hero">
        <p className="eyebrow">About Vizipa</p>
        <h1>The Philosophy of Home</h1>
        <p className="page-lead max-3xl">
          At Vizipa, construction isn’t just about structures; it is about the sanctity of home.
          We bridge aspirational living with practical investment through plotted developments rooted in reliability,
          transparency, and long-term value.
        </p>
      </section>

      <section className="about-grid two-col-grid section-gap">
        <div>
          <h2>Our Story</h2>
          <p>
            Vizipa Constructions is built on the belief that every plotted development should offer clarity,
            confidence, and future-ready value. We focus on well-planned communities, legally transparent processes,
            and precision execution that reduces uncertainty for buyers.
          </p>
          <p>
            Our promise is simple: a hassle-free path to land ownership in Bangalore’s most promising corridors.
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

      <section className="section-gap">
        <div className="section-title-wrap">
          <p className="eyebrow">Leadership</p>
          <h2>Our Directors</h2>
        </div>
        <div className="stack-cards">
          {directors.map((person) => (
            <div className="luxury-card director-card" key={person.name}>
              <h3>{person.name}</h3>
              <p className="role-line">{person.role}</p>
              <p>{person.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}