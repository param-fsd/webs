"use client";

import { CheckCircle2, ShieldCheck, Trees, ArrowUpRight } from "lucide-react";

const benchmarks = [
  {
    icon: <CheckCircle2 size={22} strokeWidth={1.8} />,
    label: "Execution",
    title: "Precision Engineering",
    desc: "Every plotted development is executed with meticulous site coordination, strong planning discipline, and careful attention to approved layouts, ensuring refined delivery with minimal deviation.",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.8} />,
    label: "Trust",
    title: "Absolute Transparency",
    desc: "We emphasize clarity across documentation, project direction, and customer communication, giving buyers confidence through structured processes, approvals guidance, and dependable project visibility.",
  },
  {
    icon: <Trees size={22} strokeWidth={1.8} />,
    label: "Future Living",
    title: "Sustainable Urbanism",
    desc: "Our layouts are shaped with long-term livability in mind, balancing nature, accessibility, and modern infrastructure to create environmentally conscious communities for evolving lifestyles.",
  },
];

export default function PremiumIntro() {
  return (
    <section className="page-shell section-gap premium-intro-section">
      <div className="section-title-wrap premium-intro-head">
        <p className="eyebrow">The Vizipa Benchmark</p>
        <h2>Premium plotted developments built on trust and precision</h2>
        <p className="premium-intro-lead">
          At Vizipa Constructions, every development is guided by quality,
          accountability, and a long-term vision for better living. Our approach
          combines disciplined execution, transparent processes, and thoughtful
          planning to shape destinations of enduring value.
        </p>
      </div>

      <div className="card-grid three-grid premium-benchmark-grid">
        {benchmarks.map((item, index) => (
          <article
            className="luxury-card feature-card premium-benchmark-card"
            key={item.title}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="premium-benchmark-topline" />

            <div className="premium-benchmark-header">
              <div className="icon-wrap premium-icon-wrap">{item.icon}</div>
              <div className="premium-benchmark-meta">
                <span className="premium-benchmark-label">{item.label}</span>
                <span className="premium-benchmark-arrow">
                  <ArrowUpRight size={16} strokeWidth={1.8} />
                </span>
              </div>
            </div>

            <div className="premium-benchmark-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <div className="premium-benchmark-footer">
              <span className="premium-benchmark-line" />
              <span className="premium-benchmark-note">
                Built with a premium-first approach
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}