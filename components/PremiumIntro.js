import { CheckCircle2, ShieldCheck, Trees } from "lucide-react";

const benchmarks = [
  {
    icon: <CheckCircle2 size={20} />,
    title: "Precision Engineering",
    desc: "Zero deviation from approved plans with disciplined on-ground execution.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Absolute Transparency",
    desc: "Clear titles, RERA-approved direction, and E-Khata-ready confidence.",
  },
  {
    icon: <Trees size={20} />,
    title: "Sustainable Urbanism",
    desc: "Environment-friendly layouts designed for tomorrow’s lifestyle needs.",
  },
];

export default function PremiumIntro() {
  return (
    <section className="page-shell section-gap">
      <div className="section-title-wrap">
        <p className="eyebrow">The Vizipa Benchmark</p>
        <h2>Premium plotted developments built on trust and precision</h2>
      </div>

      <div className="card-grid three-grid">
        {benchmarks.map((item) => (
          <div className="luxury-card feature-card" key={item.title}>
            <div className="icon-wrap">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}