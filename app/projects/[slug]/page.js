import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPinned, Building2 } from "lucide-react";

const projects = [
  {
    slug: "vizipa-avalon",
    name: "Vizipa Avalon",
    status: "Ongoing",
    tagline: "A Poised Retreat in the New Hub of Bangalore.",
    desc: "A premium plotted development positioned near the STRR and the Malur-Hoskote tech-industrial corridor, created for future-facing investment and refined living.",
    image: "/project-1.jpg",
    location: "Malur - Hoskote Growth Corridor",
    type: "Premium Plotted Development",
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
    location: "Sarjapur Road, Bangalore",
    type: "Completed Residential Layout",
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
      title: "Project Not Found | Vizipa",
      description: "The requested project could not be found.",
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
      <section className="project-single-hero luxury-card">
        <div className="project-single-hero-media">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="cover-image"
          />
        </div>

        <div className="project-single-hero-overlay" />

        <div className="project-single-hero-content">
          <div className="project-single-hero-top">
            <Link href="/projects" className="project-back-link">
              Back to Projects
            </Link>
          </div>

          <div className="project-single-hero-bottom">
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
            <p className="project-single-tagline">{project.tagline}</p>

            <div className="project-single-hero-meta">
              <div className="project-single-meta-pill">
                <MapPinned size={15} />
                <span>{project.location}</span>
              </div>

              <div className="project-single-meta-pill">
                <Building2 size={15} />
                <span>{project.type}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            Explore the essential details and positioning of this premium
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
  );
}