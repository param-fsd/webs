import { Building2, FileCheck2, Landmark, Map, Shield, Users } from "lucide-react";

const services = [
  {
    icon: <Building2 size={24} />,
    title: "Premium Plotted Developments",
    desc: "Thoughtfully designed residential plotting layouts with premium planning and future-ready infrastructure.",
  },
  {
    icon: <FileCheck2 size={24} />,
    title: "Legal & Title Clarity",
    desc: "Clear-title developments with transparent documentation and buyer confidence at every stage.",
  },
  {
    icon: <Map size={24} />,
    title: "Interactive Project Exploration",
    desc: "Digital-first project discovery with master plans, plot insights, and availability-oriented experiences.",
  },
  {
    icon: <Shield size={24} />,
    title: "Zero-Deviation Execution",
    desc: "Disciplined development aligned with approved layouts and on-ground precision.",
  },
  {
    icon: <Landmark size={24} />,
    title: "Bank Tie-Up Assistance",
    desc: "Guidance on eligibility and financing support through major nationalized and private banks.",
  },
  {
    icon: <Users size={24} />,
    title: "Consultative Buyer Support",
    desc: "A personalized consultation approach focused on land appreciation, legal clarity, and fitment.",
  },
];

export default function ServicesPage() {
  return (
    <div className="page-shell page-top-space">
      <section className="page-hero small-page-hero">
        <p className="eyebrow">What We Do</p>
        <h1>Crafting Valuable Land Experiences</h1>
        <p className="page-lead max-3xl">
          We go beyond plotted development. Vizipa creates premium land investment opportunities backed by precision,
          transparency, and thoughtful buyer guidance.
        </p>
      </section>

      <section className="card-grid three-grid section-gap">
        {services.map((item) => (
          <div className="luxury-card service-card" key={item.title}>
            <div className="icon-wrap">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="section-gap luxury-band">
        <div className="two-col-grid align-center">
          <div>
            <p className="eyebrow">Our Promise</p>
            <h2>The Discipline of Precision</h2>
            <p>
              Every Vizipa development is designed to balance livability, connectivity, and long-term return on investment.
              Our approach is rooted in engineering discipline and delivered with premium buyer confidence.
            </p>
          </div>
          <div className="metric-grid">
            <div className="metric-card luxury-card">
              <span>01</span>
              <h3>Planned Growth Corridors</h3>
            </div>
            <div className="metric-card luxury-card">
              <span>02</span>
              <h3>Transparent Development Standards</h3>
            </div>
            <div className="metric-card luxury-card">
              <span>03</span>
              <h3>Buyer-Centric Consultation</h3>
            </div>
            <div className="metric-card luxury-card">
              <span>04</span>
              <h3>Premium Community Vision</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}