"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const items = [
  {
    name: "Vizipa Avalon",
    tag: "Flagship",
    status: "Ongoing",
    location: "Chikkanahalli - Malur Road",
    image: "/img4.jpg",
    href: "/projects/vizipa-avalon",
    desc: "A premium DTCP-approved plotted development spread across 21 acres with 302 residential plots, landscaped spaces, underground infrastructure, and strong future growth potential.",
  },
  {
    name: "Vizipa Optima",
    tag: "Legacy",
    status: "Completed",
    location: "Sarjapur Road, Bangalore",
    image: "/img6.jpg",
    href: "/projects/vizipa-optima",
    desc: "An affordable apartment community with 70 thoughtfully designed homes, naturally ventilated living spaces, lifestyle amenities, and excellent Sarjapur Road connectivity.",
  },
];

const styles = {
  sectionTitleWrap: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "22px",
  },

  card: {
    overflow: "hidden",
    borderRadius: "6px",
    border: "1px solid rgba(22, 22, 22, 0.08)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,248,248,0.88))",
    boxShadow: "0 18px 42px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },

  imageWrap: {
    position: "relative",
    width: "100%",
    height: "280px",
    overflow: "hidden",
    background: "#ececec",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  overlayTop: {
    position: "absolute",
    top: "16px",
    left: "16px",
    right: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    flexWrap: "wrap",
  },

  tagGroup: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },

  tag: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "30px",
    padding: "0 12px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.88)",
    color: "#1f1f1f",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.05em",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  },

  statusTag: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "30px",
    padding: "0 12px",
    borderRadius: "999px",
    color: "#ffffff",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.05em",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  },

  content: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flex: 1,
  },

  locationRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#666",
    fontSize: "12px",
    lineHeight: 1.4,
  },

  title: {
    margin: 0,
    fontSize: "24px",
    lineHeight: 1.15,
    color: "#111111",
    letterSpacing: "-0.03em",
  },

  desc: {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.75,
    color: "#5a5a5a",
  },

  bottomRow: {
    marginTop: "auto",
    paddingTop: "10px",
    display: "flex",
    alignItems: "center",
  },

  textLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "42px",
    padding: "0 18px",
    borderRadius: "999px",
    background: "#111111",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "12px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    textDecoration: "none",
    width: "fit-content",
    transition: "all 0.25s ease",
  },
};

export default function ProjectCards() {
  return (
    <section className="page-shell section-gap">
      <div style={styles.sectionTitleWrap}>
        <div>
          <p className="eyebrow">Featured Projects</p>

          <h2 style={{ maxWidth: "760px", marginBottom: "0" }}>
            Secure a signature address in Bangalore’s rising corridors
          </h2>
        </div>

        <Link href="/projects" className="text-link">
          View all projects
        </Link>
      </div>

      <div className="project-cards-inline-grid" style={styles.grid}>
        {items.map((item) => (
          <article
            key={item.name}
            style={styles.card}
            className="project-cards-inline-item"
          >
            <div style={styles.imageWrap}>
              <img src={item.image} alt={item.name} style={styles.image} />

              <div style={styles.overlayTop}>
                <div style={styles.tagGroup}>
                  <span style={styles.tag}>{item.tag}</span>

                  <span
                    style={{
                      ...styles.statusTag,
                      background:
                        item.status === "Completed"
                          ? "#222222"
                          : "#238636",
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>

            <div style={styles.content}>
              <div style={styles.locationRow}>
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>

              <h3 style={styles.title}>{item.name}</h3>

              <p style={styles.desc}>{item.desc}</p>

              <div style={styles.bottomRow}>
                <Link
                  href={item.href}
                  style={styles.textLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2a2a2a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#111111";
                  }}
                >
                  Explore Project
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .project-cards-inline-grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }

          .project-cards-inline-item {
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 640px) {
          .project-cards-inline-item img {
            height: 100%;
          }

          .project-cards-inline-item article,
          .project-cards-inline-item {
            border-radius: 16px;
          }

          .project-cards-inline-grid {
            gap: 18px !important;
          }

          .project-cards-inline-item {
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
}