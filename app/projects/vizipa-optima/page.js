import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPinned, Building2 } from "lucide-react";

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
            <div className="status-chip status-chip-completed">
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
  );
}