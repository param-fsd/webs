import Link from "next/link";

const items = [
  {
    name: "Vizipa Avalon",
    tag: "Flagship",
    desc: "A poised retreat in the new hub of Bangalore, strategically aligned to the STRR and the Malur-Hoskote growth corridor.",
  },
  {
    name: "Vizipa Optima",
    tag: "Legacy",
    desc: "A testament to optimal living, with over 70 families already calling this Sarjapur Road community home.",
  },
];

export default function ProjectCards() {
  return (
    <section className="page-shell section-gap">
      <div className="section-title-wrap row-title">
        <div>
          <p className="eyebrow">Featured Projects</p>
          <h2>Secure a signature address in Bangalore’s rising corridors</h2>
        </div>
        <Link href="/projects" className="text-link">View all projects</Link>
      </div>

      <div className="card-grid two-grid">
        {items.map((item) => (
          <div className="luxury-card project-mini-card" key={item.name}>
            <span className="mini-tag">{item.tag}</span>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <Link href="/projects" className="text-link">Explore project</Link>
          </div>
        ))}
      </div>
    </section>
  );
}