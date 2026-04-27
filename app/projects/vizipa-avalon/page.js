import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MapPinned,
  Building2,
  Trees,
  Camera,
} from "lucide-react";

export const metadata = {
  title: "Vizipa Avalon | Premium Plotted Development",
  description:
    "Vizipa Avalon is a DTCP-approved premium plotted development at Chikkanahalli-Malur Road with 302 plots, landscaped parks, underground infrastructure, and interactive project map.",
};

export default function VizipaAvalonPage() {
  return (
    <div className="page-shell page-top-space">
      <section className="project-single-hero luxury-card">
        <div className="project-single-hero-media">
          <Image
            src="/project-1.jpg"
            alt="Vizipa Avalon"
            fill
            priority
            className="cover-image"
          />
        </div>

        <div className="project-single-hero-overlay" />

        <div className="project-single-hero-content">
          <Link href="/projects" className="project-back-link">
            Back to Projects
          </Link>

          <div className="project-single-hero-bottom">
            <div className="status-chip status-chip-ongoing">Ongoing</div>

            <h1>Vizipa Avalon</h1>
            <p className="project-single-tagline">
              Where tranquility, connectivity, and future growth come together
              in a thoughtfully planned plotted community.
            </p>

            <div className="project-single-hero-meta">
              <div className="project-single-meta-pill">
                <MapPinned size={15} />
                <span>Chikkanahalli - Malur Road, Karnataka</span>
              </div>

              <div className="project-single-meta-pill">
                <Building2 size={15} />
                <span>Premium Plotted Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="card-grid four-grid">
          {[
            ["Total Area", "21 Acres 34.5 Guntas"],
            ["Residential Plots", "302"],
            ["Approval", "DTCP Approved"],
            ["Plot Sizes", "30x40, 30x50, 40x60"],
          ].map(([label, value]) => (
            <div className="luxury-card metric-card" key={label}>
              <span>{label}</span>
              <h3>{value}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="section-title-wrap">
          <p className="eyebrow">Project Overview</p>
          <h2>A calm residential address with strong growth potential</h2>
          <p className="page-lead max-3xl">
            Avalon by Vizipa is a premium plotted development located on
            Chikkanahalli-Malur Road, Karnataka. Planned across 21 acres and
            34.5 guntas, the project brings together clear approvals, 302
            residential plots, landscaped open spaces, underground utilities,
            and a peaceful environment suitable for both living and long-term
            investment.
          </p>
          <p className="page-lead max-3xl">
            Positioned in the Hoskote-Malur growth corridor, Avalon benefits
            from proximity to industrial hubs, educational institutions,
            expressway access, and established parts of East Bangalore.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="section-title-wrap">
          <p className="eyebrow">Key Highlights</p>
          <h2>Designed around trust, access, and everyday comfort</h2>
        </div>

        <div className="card-grid three-grid">
          {[
            "DTCP-approved layout with clear planning standards.",
            "302 premium residential plots across a large gated community.",
            "Multiple plot dimensions including 30x40, 30x50 and 40x60.",
            "Located close to the Hoskote-Malur industrial and growth belt.",
            "Loan approvals supported by major financial institutions.",
            "Green open spaces, parks, internal roads and modern services.",
          ].map((item) => (
            <div className="luxury-card info-card" key={item}>
              <div className="project-highlight-item">
                <div className="project-highlight-icon">
                  <CheckCircle2 size={16} />
                </div>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="section-title-wrap">
          <p className="eyebrow">Amenities</p>
          <h2>Infrastructure planned for refined plotted living</h2>
          <p className="page-lead max-3xl">
            Avalon is designed with practical infrastructure and community
            features that support daily convenience, safety, and a better
            residential experience.
          </p>
        </div>

        <div className="card-grid four-grid">
          {[
            "Entrance gate with security cabin",
            "Underground sewage connection to each plot",
            "Piped underground storm water drain",
            "Piped water supply to each plot",
            "Underground electrical cabling",
            "Streetlights and common area lighting",
            "Kerbs and pedestrian pathway on each road",
            "Landscaped parks and open areas",
            "Kids play area",
            "Sports facilities",
            "Concrete roads",
            "Multiple trees on each road",
          ].map((item) => (
            <div className="luxury-card feature-card" key={item}>
              <div className="icon-wrap">
                <Trees size={18} />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="section-title-wrap">
          <p className="eyebrow">Nearest Places</p>
          <h2>Close to education, industries, retail, and airport access</h2>
          <p className="page-lead max-3xl">
            The project location offers access to important destinations across
            East Bangalore, supporting both residential convenience and future
            investment value.
          </p>
        </div>

        <div className="luxury-card nearest-box">
          <div className="nearest-grid">
            {[
              "Sharanya Narayani International School - 300 m",
              "Volvo Factory - 3.3 km",
              "Regenta Resort by Royal Orchid - 8 km",
              "Wistron Infocomm Manufacturing - 11 km",
              "Honda Factory - 11.8 km",
              "Upcoming Expressway Entry/Exit - 12.7 km",
              "Malur Industrial Estate - 15 km",
              "MVJ Medical College - 15 km",
              "Hoskote Toll Booth - 19.4 km",
              "PVR Orion Uptown Mall - 20 km",
              "Hope Farm Junction - 29 km",
              "Bangalore Airport KIAL - 41 km",
            ].map((item) => (
              <div key={item} className="project-highlight-item">
                <div className="project-highlight-icon">
                  <MapPinned size={16} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="section-title-wrap">
          <p className="eyebrow">Gallery</p>
          <h2>Explore Avalon through visuals</h2>
          <p className="page-lead max-3xl">
            View the project plan, open spaces, layout character, and
            connectivity-focused environment through selected visuals.
          </p>
        </div>

        <div className="avalon-gallery-grid">
          {[
            {
              src: "/project-1.jpg",
              title: "Project Master View",
            },
            {
              src: "/project-2.jpg",
              title: "Landscaped Open Spaces",
            },
            {
              src: "/sec.jpg",
              title: "Internal Road Network",
            },
            {
              src: "/about-image.jpg",
              title: "Community Planning",
            },
          ].map((item, index) => (
            <div
              className={`luxury-card avalon-gallery-card ${
                index === 0 ? "avalon-gallery-large" : ""
              }`}
              key={item.title}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="cover-image"
              />

              <div className="avalon-gallery-overlay">
                <Camera size={15} />
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-gap website-viewer-section">
        <div className="section-title-wrap">
          <p className="eyebrow">Interactive Map</p>
          <h2>Explore Avalon digitally</h2>
          <p className="page-lead max-3xl">
            Use the interactive project map to explore the layout, plot
            positioning, availability, and project details in a more visual and
            guided way.
          </p>
        </div>

        <div className="browser-card">
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="browser-url">nex369.luminexa.in</div>
          </div>

          <div className="browser-frame">
            <iframe
              src="https://nex369.luminexa.in"
              title="Vizipa Avalon Interactive Map"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section-gap luxury-band">
        <div className="row-title">
          <div>
            <p className="eyebrow">Enquire Now</p>
            <h2>Interested in Vizipa Avalon?</h2>
            <p>
              Connect with the Vizipa team to know more about availability,
              pricing, plot sizes, and project guidance.
            </p>
          </div>

          <Link href="/contact" className="gold-btn">
            Contact Sales
          </Link>
        </div>
      </section>

      <style>{`
        .nearest-box {
          padding: 26px;
        }

        .nearest-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .avalon-gallery-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          grid-template-rows: repeat(3, 180px);
          gap: 18px;
        }

        .avalon-gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 6px;
          min-height: 180px;
        }

        .avalon-gallery-large {
          grid-row: span 3;
        }

        .avalon-gallery-overlay {
          position: absolute;
          left: 14px;
          bottom: 14px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 32px;
          padding: 0 13px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.5);
          color: #ffffff;
          font-size: 11px;
          letter-spacing: 0.04em;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .avalon-gallery-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.02),
            rgba(0, 0, 0, 0.35)
          );
          pointer-events: none;
        }

        @media (max-width: 860px) {
          .nearest-grid {
            grid-template-columns: 1fr;
          }

          .avalon-gallery-grid {
            grid-template-columns: 1fr;
            grid-template-rows: none;
          }

          .avalon-gallery-card,
          .avalon-gallery-large {
            height: 260px;
            grid-row: auto;
          }
        }

        @media (max-width: 640px) {
          .avalon-gallery-card,
          .avalon-gallery-large {
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}