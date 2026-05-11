import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Vizipa Avalon",
    slug: "vizipa-avalon",
    status: "Ongoing",
    tagline: "A Poised Retreat in the New Hub of Bangalore.",
    desc: "A premium plotted development positioned near the STRR and the Malur-Hoskote tech-industrial corridor, created for future-facing investment and refined living.",
    image: "/img4.jpg",
  },
  {
    name: "Vizipa Optima",
    slug: "vizipa-optima",
    status: "Completed",
    tagline: "A Testament to Optimal Living.",
    desc: "A successful Sarjapur Road plotted development where over 70 families already call the community home.",
    image: "/project-2.jpg",
  },
];

export const metadata = {
  title: "Projects | Vizipa",
  description:
    "Explore premium Vizipa plotted developments designed for clarity, connectivity, and long-term asset value.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="projects-hero-image-wrap">
        <Image
          src="/img5.jpg"
          alt="Vizipa Projects"
          fill
          priority
          className="projects-hero-image"
        />

        <div className="projects-hero-overlay" />

        <div className="projects-hero-content-wrap">
          <div className="projects-hero-content">
            <p className="eyebrow light">Our Projects</p>

            <h1>The Portfolio</h1>

            <p className="projects-hero-text">
              Explore premium Vizipa developments designed for clarity,
              connectivity, and long-term asset value.
            </p>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <section className="stack-cards section-gap">
          {projects.map((project) => (
            <article
              className="project-showcase luxury-card project-showcase-horizontal"
              key={project.name}
            >
              <div className="project-image-wrap project-image-left">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1200}
                  height={800}
                  className="cover-image"
                  priority={project.name === "Vizipa Avalon"}
                />
              </div>

              <div className="project-content-wrap project-content-right">
                <div
                  className={`project-status-tag ${
                    project.status === "Ongoing"
                      ? "project-status-ongoing"
                      : "project-status-completed"
                  }`}
                >
                  {project.status}
                </div>

                <h2 className="project-card-title">{project.name}</h2>
                <p className="project-card-tagline">{project.tagline}</p>
                <p className="project-card-desc">{project.desc}</p>

                <div className="project-card-actions">
                  <Link href={`/projects/${project.slug}`} className="gold-btn">
                    View Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="section-gap luxury-band location-growth-section">
          <div className="section-title-wrap">
            <p className="eyebrow">Why Hoskote</p>
            <h2>A Corridor of Strategic Growth</h2>
          </div>

          <div className="card-grid three-grid">
            <div className="luxury-card info-card">
              <h3>25 Minutes from Whitefield</h3>
              <p>
                Fast access to one of Bangalore’s most established tech and
                residential ecosystems.
              </p>
            </div>

            <div className="luxury-card info-card">
              <h3>STRR Advantage</h3>
              <p>
                Connectivity-led growth backed by long-term infrastructure
                transformation.
              </p>
            </div>

            <div className="luxury-card info-card">
              <h3>Industrial Momentum</h3>
              <p>
                Benefiting from the manufacturing and industrial influence of the
                Hoskote-Malur belt.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .projects-hero-image-wrap {
          position: relative;
          height: 100svh;
          min-height: 680px;
          width: 100%;
          overflow: hidden;
        }

        .projects-hero-image {
          object-fit: cover;
          transform: scale(1.015);
        }

        .projects-hero-overlay {
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

        .projects-hero-content-wrap {
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

        .projects-hero-content {
          max-width: 420px;
          color: #ffffff;
          animation: projectsFadeUp 1s ease;
        }

        .projects-hero-content .eyebrow {
          margin: 0 0 6px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .projects-hero-content h1 {
          max-width: 380px;
          margin: 0 0 8px;
          color: #ffffff;
          font-size: clamp(24px, 3vw, 38px);
          line-height: 1.04;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .projects-hero-text {
          max-width: 360px;
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 11px;
          line-height: 1.58;
        }

        .project-status-tag {
          width: fit-content;
          min-height: 28px;
          padding: 0 14px;
          margin-bottom: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .project-status-ongoing {
          background: #238636;
          color: #ffffff;
          box-shadow: 0 8px 22px rgba(35, 134, 54, 0.18);
        }

        .project-status-completed {
          background: rgba(0, 0, 0, 0.08);
          color: #222222;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        @keyframes projectsFadeUp {
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
          .projects-hero-content-wrap {
            width: min(1200px, calc(100% - 36px));
            padding-bottom: 36px;
          }
        }

        @media (max-width: 640px) {
          .projects-hero-image-wrap {
            height: 92svh;
            min-height: 620px;
          }

          .projects-hero-content-wrap {
            width: calc(100% - 24px);
            padding-bottom: 28px;
          }

          .projects-hero-content {
            max-width: 300px;
          }

          .projects-hero-content h1 {
            max-width: 280px;
            font-size: clamp(22px, 8vw, 30px);
            margin-bottom: 7px;
          }

          .projects-hero-text {
            max-width: 270px;
            font-size: 11px;
            line-height: 1.5;
          }
        }
      `}</style>
    </>
  );
}