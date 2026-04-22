import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "vizipa-avalon",
    name: "Vizipa Avalon",
    status: "Ongoing",
    tagline: "A Poised Retreat in the New Hub of Bangalore.",
    desc: "A premium plotted development positioned near the STRR and the Malur-Hoskote tech-industrial corridor, created for future-facing investment and refined living.",
    image: "/project-1.jpg",
    highlights: [
      "Strategic STRR Connectivity",
      "Premium Gated Layout",
      "High Growth Investment Zone",
    ],
  },
  {
    slug: "vizipa-optima",
    name: "Vizipa Optima",
    status: "Completed",
    tagline: "A Testament to Optimal Living.",
    desc: "A successful Sarjapur Road plotted development where over 70 families already call the community home.",
    image: "/project-2.jpg",
    highlights: [
      "70+ Families Living",
      "Developed Infrastructure",
      "Prime Sarjapur Location",
    ],
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Vizipa`,
    description: project.desc,
  };
}

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-shell page-top-space">
      <section className="project-hero luxury-card">
        <div className="project-hero-image">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="cover-image"
          />
        </div>

        <div className="project-hero-overlay" />

        <div className="project-hero-content">
          <div
            className={`status-chip ${
              project.status === "Ongoing"
                ? "status-chip-ongoing"
                : "status-chip-completed"
            }`}
          >
            {project.status}
          </div>

          <h1>{project.name}</h1>
          <p className="project-hero-tagline">{project.tagline}</p>
        </div>
      </section>

      <section className="section-gap project-detail-grid">
        <div className="project-detail-left">
          <p className="eyebrow">Project Overview</p>
          <h2>Designed for growth and refined living</h2>
          <p className="project-detail-desc">{project.desc}</p>

          <div className="project-highlights">
            <h3>Key Highlights</h3>

            <div className="highlight-list">
              {project.highlights.map((item) => (
                <div key={item} className="highlight-item">
                  <span className="highlight-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="project-detail-right luxury-card">
          <p className="eyebrow">Explore</p>
          <h3>Project Snapshot</h3>
          <p>
            Discover more details, location value, and the positioning of this
            premium plotted development.
          </p>

          <div className="project-quick-meta">
            <div className="project-quick-meta-item">
              <span>Status</span>
              <strong>{project.status}</strong>
            </div>

            <div className="project-quick-meta-item">
              <span>Project</span>
              <strong>{project.name}</strong>
            </div>
          </div>

          <div className="project-detail-actions">
            <Link href="/contact" className="gold-btn">
              Enquire Now
            </Link>

            <Link href="/projects" className="text-link">
              Back to Projects
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}