import Image from "next/image";

const projects = [
  {
    name: "Vizipa Avalon",
    status: "Ongoing",
    tagline: "A Poised Retreat in the New Hub of Bangalore.",
    desc: "A premium plotted development positioned near the STRR and the Malur-Hoskote tech-industrial corridor, created for future-facing investment and refined living.",
    image: "/project-1.jpg",
  },
  {
    name: "Vizipa Optima",
    status: "Completed",
    tagline: "A Testament to Optimal Living.",
    desc: "A successful Sarjapur Road plotted development where over 70 families already call the community home.",
    image: "/project-2.jpg",
  },
];

const mockPlots = [
  { id: "A-101", size: "1200 sq.ft", status: "Available", facing: "East", distance: "180m to Entrance" },
  { id: "A-102", size: "1500 sq.ft", status: "Booked", facing: "North", distance: "120m to Clubhouse" },
  { id: "A-103", size: "1200 sq.ft", status: "Available", facing: "West", distance: "200m to Green Zone" },
  { id: "A-104", size: "1500 sq.ft", status: "Available", facing: "South", distance: "90m to Entrance" },
];

export default function ProjectsPage() {
  return (
    <div className="page-shell page-top-space">
      <section className="page-hero small-page-hero">
        <p className="eyebrow">Our Projects</p>
        <h1>The Portfolio</h1>
        <p className="page-lead max-3xl">
          Explore premium Vizipa developments designed for clarity, connectivity, and long-term asset value.
        </p>
      </section>

      <section className="stack-cards section-gap">
        {projects.map((project) => (
          <div className="project-showcase luxury-card" key={project.name}>
            <div className="project-image-wrap">
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={800}
                className="cover-image"
              />
            </div>
            <div className="project-content-wrap">
              <div className="status-chip">{project.status}</div>
              <h2>{project.name}</h2>
              <p className="highlight-line">{project.tagline}</p>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="section-gap map-section luxury-card">
        <div className="section-title-wrap">
          <p className="eyebrow">Interactive Master Plan</p>
          <h2>Precision in Every Dimension</h2>
          <p className="page-lead max-3xl">
            Explore your future address. Click on the layout to view plot dimensions, availability, and proximity to key amenities.
          </p>
        </div>

        <div className="map-layout-grid">
          <div className="mock-map-box">
            <div className="mock-plot available">A-101</div>
            <div className="mock-plot booked">A-102</div>
            <div className="mock-plot available">A-103</div>
            <div className="mock-plot available">A-104</div>
            <div className="mock-legend">
              <span><i className="legend available-dot"></i> Available</span>
              <span><i className="legend booked-dot"></i> Booked</span>
            </div>
          </div>

          <div className="sidebar-card luxury-card inner-sidebar">
            <h3>Plot Insights</h3>
            <div className="plot-list">
              {mockPlots.map((plot) => (
                <div className="plot-item" key={plot.id}>
                  <strong>{plot.id}</strong>
                  <p>{plot.size}</p>
                  <p>{plot.status}</p>
                  <p>{plot.facing} Facing</p>
                  <p>{plot.distance}</p>
                </div>
              ))}
            </div>
            <a href="/contact" className="gold-btn full-btn">Book a Site Visit</a>
          </div>
        </div>
      </section>

      <section className="section-gap luxury-band">
        <div className="section-title-wrap">
          <p className="eyebrow">Why Hoskote</p>
          <h2>A Corridor of Strategic Growth</h2>
        </div>
        <div className="card-grid three-grid">
          <div className="luxury-card info-card">
            <h3>25 Minutes from Whitefield</h3>
            <p>Fast access to one of Bangalore’s most established tech and residential ecosystems.</p>
          </div>
          <div className="luxury-card info-card">
            <h3>STRR Advantage</h3>
            <p>Connectivity-led growth backed by long-term infrastructure transformation.</p>
          </div>
          <div className="luxury-card info-card">
            <h3>Industrial Momentum</h3>
            <p>Benefiting from the manufacturing and industrial influence of the Hoskote-Malur belt.</p>
          </div>
        </div>
      </section>
    </div>
  );
}