import {
  Building2,
  FileCheck2,
  Landmark,
  Map,
  Shield,
  Users,
} from "lucide-react";

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
    <>
      {/* 🔥 FULL SCREEN HERO */}
      <section className="hero-image-wrap">
        <img
          src="/img5.jpg"
          alt="Premium plotted development"
          className="hero-image"
        />

        <div className="hero-overlay" />

        <div className="hero-content-wrap">
          <div className="hero-content">
            <p className="eyebrow">What We Do</p>

            <h1>Crafting Valuable Land Experiences</h1>

            <p className="page-lead">
              We go beyond plotted development. Vizipa creates premium land
              investment opportunities backed by precision, transparency,
              and thoughtful buyer guidance.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 CONTENT */}
      <div className="page-shell">
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
                Every Vizipa development is designed to balance livability,
                connectivity, and long-term return on investment. Our approach
                is rooted in engineering discipline and delivered with premium
                buyer confidence.
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

      {/* 🔹 INLINE CSS */}
      <style>{`
        .hero-image-wrap {
          position: relative;
          height: 100svh;
          min-height: 680px;
          width: 100%;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.03);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.08),
              rgba(0, 0, 0, 0.22) 46%,
              rgba(0, 0, 0, 0.52)
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.38),
              rgba(0, 0, 0, 0.14) 48%,
              rgba(0, 0, 0, 0.06)
            );
        }

        .hero-content-wrap {
          position: absolute;
          inset: 0;
          z-index: 2;

          display: flex;
          align-items: flex-end;

          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;

          left: 0;
          right: 0;

          padding-bottom: 52px;
        }

        .hero-content {
          max-width: 460px;
          color: #ffffff;
          animation: fadeUp 1s ease;
        }

        .hero-content .eyebrow {
          margin-bottom: 6px;
          color: rgba(255, 255, 255, 0.78);
        }

        .hero-content h1 {
          max-width: 420px;
          margin: 0 0 10px;

          color: #ffffff;

          font-size: clamp(28px, 3.5vw, 52px);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .hero-content .page-lead {
          max-width: 420px;
          margin: 0;

          color: rgba(255, 255, 255, 0.82);

          font-size: 13px;
          line-height: 1.7;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card {
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        @media (max-width: 860px) {
          .hero-content-wrap {
            width: min(1200px, calc(100% - 36px));
            padding-bottom: 38px;
          }

          .hero-content h1 {
            font-size: clamp(24px, 6vw, 38px);
          }
        }

        @media (max-width: 640px) {
          .hero-image-wrap {
            min-height: 620px;
          }

          .hero-content-wrap {
            width: calc(100% - 24px);
            padding-bottom: 28px;
          }

          .hero-content {
            max-width: 300px;
          }

          .hero-content h1 {
            max-width: 280px;
            font-size: clamp(22px, 8vw, 30px);
            margin-bottom: 8px;
          }

          .hero-content .page-lead {
            max-width: 270px;
            font-size: 11px;
            line-height: 1.6;
          }
        }
      `}</style>
    </>
  );
}

