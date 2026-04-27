import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Vizipa Avalon",
    slug: "vizipa-avalon",
    status: "Ongoing",
    tagline: "A Poised Retreat in the New Hub of Bangalore.",
    desc: "A premium plotted development positioned near the STRR and the Malur-Hoskote tech-industrial corridor, created for future-facing investment and refined living.",
    image: "/project-1.jpg",
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
    <div className="page-shell page-top-space">
      <section className="page-hero small-page-hero">
        <p className="eyebrow">Our Projects</p>
        <h1>The Portfolio</h1>
        <p className="page-lead max-3xl">
          Explore premium Vizipa developments designed for clarity,
          connectivity, and long-term asset value.
        </p>
      </section>

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
                className={`status-chip ${
                  project.status === "Ongoing"
                    ? "status-chip-ongoing"
                    : "status-chip-completed"
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
  );
}