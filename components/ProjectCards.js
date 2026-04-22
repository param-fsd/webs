"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const items = [
  {
    name: "Vizipa Avalon",
    tag: "Flagship",
    status: "Ongoing",
    location: "STRR / Malur-Hoskote Corridor",
    image: "/project-1.jpg",
    desc: "A poised retreat in the new hub of Bangalore, strategically aligned to the STRR and the Malur-Hoskote growth corridor.",
  },
  {
    name: "Vizipa Optima",
    tag: "Legacy",
    status: "Completed",
    location: "Sarjapur Road",
    image: "/project-2.jpg",
    desc: "A testament to optimal living, with over 70 families already calling this Sarjapur Road community home.",
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
    transition: "transform 0.32s ease, box-shadow 0.32s ease",
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
    background: "rgba(10, 81, 1, 0.98)",
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
  },
  desc: {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.75,
    color: "#5a5a5a",
  },
  bottomRow: {
    marginTop: "auto",
    paddingTop: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "14px",
    flexWrap: "wrap",
  },
  textLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#3a3a3a",
    fontWeight: 600,
    fontSize: "13px",
    textDecoration: "none",
  },
  mobileGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "22px",
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
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 26px 56px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 18px 42px rgba(0,0,0,0.08)";
            }}
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
        ? "#c62828"   // red
        : "rgba(10, 81, 1, 0.98)", // green (existing)
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
                <Link href="/projects" style={styles.textLink}>
                  Explore project
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .project-cards-inline-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .project-cards-inline-item img {
            height: 100%;
          }

          .project-cards-inline-item article,
          .project-cards-inline-item {
            border-radius: 24px;
          }

          .project-cards-inline-grid {
            gap: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}