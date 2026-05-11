import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPinned,
  Building2,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Vizipa Optima | Vizipa",
  description:
    "A successful Sarjapur Road plotted development where over 70 families already call the community home.",
};

export default function VizipaOptimaPage() {
  const project = {
    name: "Vizipa Optima",
    status: "Completed",
    tagline: "A Testament to Optimal Living.",
    desc: "A successful Sarjapur Road plotted development where over 70 families already call the community home.",
    image: "/project-2.jpg",
    location: "Sarjapur Road, Bangalore",
    type: "Completed Residential Layout",
    highlights: [
      "70+ Families Living",
      "Developed Infrastructure",
      "Prime Sarjapur Location",
    ],
  };

  return (
    <>
      <section className="optima-hero-image-wrap">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          className="optima-hero-image"
        />

        <div className="optima-hero-overlay" />

        <div className="optima-hero-content-wrap">
          <div className="optima-hero-content">
            <div className="optima-hero-top-row">
              <Link
                href="/projects"
                className="optima-back-btn"
                aria-label="Back to projects"
              >
                <ArrowLeft size={17} />
              </Link>

              <div className="optima-status-tag">{project.status}</div>
            </div>

            <p className="eyebrow light">{project.type}</p>

            <h1>{project.name}</h1>

            <p className="optima-hero-text">{project.tagline}</p>

            <div className="optima-hero-meta">
              <div className="optima-meta-pill">
                <MapPinned size={14} />
                <span>{project.location}</span>
              </div>

              <div className="optima-meta-pill">
                <Building2 size={14} />
                <span>{project.type}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <section className="section-gap project-single-layout">
          <div className="project-single-main">
            <div className="project-copy-block">
              <p className="eyebrow">Project Overview</p>
              <h2>Crafted for value, positioning, and long-term living</h2>
              <p className="project-single-desc">{project.desc}</p>
            </div>

            <div className="project-highlights-card luxury-card">
              <div className="project-highlights-head">
                <p className="eyebrow">Highlights</p>
                <h3>Key Project Advantages</h3>
              </div>

              <div className="project-highlight-list">
                {project.highlights.map((item) => (
                  <div key={item} className="project-highlight-item">
                    <div className="project-highlight-icon">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="project-single-sidebar luxury-card">
            <p className="eyebrow">Project Snapshot</p>
            <h3>Overview at a glance</h3>
            <p className="project-sidebar-copy">
              Explore the essential details and positioning of this completed
              development before you connect with our team.
            </p>

            <div className="project-sidebar-meta">
              <div className="project-sidebar-meta-item">
                <span>Status</span>
                <strong>{project.status}</strong>
              </div>

              <div className="project-sidebar-meta-item">
                <span>Project Name</span>
                <strong>{project.name}</strong>
              </div>

              <div className="project-sidebar-meta-item">
                <span>Location</span>
                <strong>{project.location}</strong>
              </div>

              <div className="project-sidebar-meta-item">
                <span>Type</span>
                <strong>{project.type}</strong>
              </div>
            </div>

            <div className="project-sidebar-actions">
              <Link href="/contact" className="gold-btn">
                Enquire Now
              </Link>

              <Link href="/projects" className="project-text-link">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>
      </div>

      <style>{`
        .optima-hero-image-wrap {
          position: relative;
          height: 100svh;
          min-height: 680px;
          width: 100%;
          overflow: hidden;
        }

        .optima-hero-image {
          object-fit: cover;
          transform: scale(1.015);
        }

        .optima-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.06),
              rgba(0, 0, 0, 0.2) 48%,
              rgba(0, 0, 0, 0.42)
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.12) 46%,
              rgba(0, 0, 0, 0.04)
            );
        }

        .optima-hero-content-wrap {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
          left: 0;
          right: 0;
          padding-bottom: 48px;
        }

        .optima-hero-content {
          max-width: 420px;
          color: #ffffff;
          animation: optimaFadeUp 1s ease;
        }

        .optima-hero-top-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .optima-back-btn {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          text-decoration: none;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .optima-back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-3px);
        }

        .optima-status-tag {
          width: fit-content;
          min-height: 30px;
          padding: 0 14px;
          margin-bottom: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #222222;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
        }

        .optima-hero-content .eyebrow {
          margin: 0 0 6px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .optima-hero-content h1 {
          max-width: 380px;
          margin: 0 0 8px;
          color: #ffffff;
          font-size: clamp(24px, 3vw, 38px);
          line-height: 1.04;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .optima-hero-text {
          max-width: 360px;
          margin: 0 0 18px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 11px;
          line-height: 1.58;
        }

        .optima-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .optima-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 32px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.13);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          font-size: 11px;
          font-weight: 500;
        }

        @keyframes optimaFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 860px) {
          .optima-hero-content-wrap {
            width: min(1200px, calc(100% - 36px));
            padding-bottom: 36px;
          }
        }

        @media (max-width: 640px) {
          .optima-hero-image-wrap {
            height: 92svh;
            min-height: 620px;
          }

          .optima-hero-content-wrap {
            width: calc(100% - 24px);
            padding-bottom: 28px;
          }

          .optima-hero-content {
            max-width: 300px;
          }

          .optima-hero-top-row {
            gap: 10px;
            margin-bottom: 14px;
          }

          .optima-back-btn {
            width: 34px;
            height: 34px;
          }

          .optima-status-tag {
            min-height: 28px;
            padding: 0 12px;
            font-size: 9px;
          }

          .optima-hero-content h1 {
            max-width: 280px;
            font-size: clamp(22px, 8vw, 30px);
            margin-bottom: 7px;
          }

          .optima-hero-text {
            max-width: 270px;
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 16px;
          }

          .optima-hero-meta {
            gap: 8px;
          }

          .optima-meta-pill {
            width: 100%;
            justify-content: flex-start;
            min-height: 32px;
            border-radius: 10px;
          }
        }
      `}</style>
    </>
  );
}