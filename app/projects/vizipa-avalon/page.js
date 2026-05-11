import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MapPinned,
  Building2,
  Trees,
  Camera,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Vizipa Avalon | Premium Plotted Development",
  description:
    "Vizipa Avalon is a DTCP-approved premium plotted development at Chikkanahalli-Malur Road with 302 plots, landscaped parks, underground infrastructure, and interactive project map.",
};

export default function VizipaAvalonPage() {
  const mapUrl = "https://avalonmap2.netlify.app/";

  return (
    <>
      <section className="avalon-hero-image-wrap">
        <Image
          src="/img4.jpg"
          alt="Vizipa Avalon"
          fill
          priority
          className="avalon-hero-image"
        />

        <div className="avalon-hero-overlay" />

        <div className="avalon-hero-content-wrap">
          <div className="avalon-hero-content">
            <div className="avalon-hero-top-row">
              <Link
                href="/projects"
                className="avalon-back-btn"
                aria-label="Back to projects"
              >
                <ArrowLeft size={17} />
              </Link>

              <div className="avalon-status-tag">Ongoing</div>
            </div>

            <p className="eyebrow light">Premium Plotted Development</p>

            <h1>Vizipa Avalon</h1>

            <p className="avalon-hero-text">
              A calm residential address on Chikkanahalli-Malur Road, planned
              with clear approvals, premium plots, landscaped spaces, and strong
              future growth potential.
            </p>

            <div className="avalon-hero-meta">
              <div className="avalon-meta-pill">
                <MapPinned size={14} />
                <span>Chikkanahalli - Malur Road, Karnataka</span>
              </div>

              <div className="avalon-meta-pill">
                <Building2 size={14} />
                <span>302 Residential Plots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-shell">
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
            <p className="eyebrow">Location Advantage</p>
            <h2>Connected to key growth destinations</h2>
            <p className="page-lead max-3xl">
              Vizipa Avalon is surrounded by important education, industrial,
              healthcare, retail, and connectivity landmarks across the
              Hoskote–Malur growth corridor.
            </p>
          </div>

          <div className="avalon-featured-location-grid">
            {[
              {
                name: "Sharanya Narayani International School",
                type: "Education",
                distance: "300 m",
                image: "/edu.webp",
                content:
                  "A reputed international school located close to Avalon, making the location suitable for families and long-term residential planning.",
              },
              {
                name: "Volvo Factory",
                type: "Industrial Landmark",
                distance: "3.3 km",
                image: "/vol.webp",
                content:
                  "A major industrial presence nearby, adding employment-driven demand and strengthening the future growth value of the corridor.",
              },
              {
                name: "PVR Orion Uptown Mall",
                type: "Retail & Lifestyle",
                distance: "20 km",
                image: "/pvr.jpg",
                content:
                  "A lifestyle and entertainment destination offering retail, dining, cinema, and family convenience for residents.",
              },
            ].map((place, index) => (
              <div
                key={place.name}
                className={`luxury-card avalon-location-feature-card ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
              >
                <div className="avalon-location-image">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="cover-image"
                  />
                </div>

                <div className="avalon-location-content">
                  <div className="avalon-location-tags">
                    <span>{place.type}</span>
                    <small>
                      <MapPinned size={14} />
                      {place.distance}
                    </small>
                  </div>

                  <h3>{place.name}</h3>
                  <p>{place.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="avalon-simple-location-grid">
            {[
              ["Wistron Infocomm Manufacturing", "11 km"],
              ["Honda Factory", "11.8 km"],
              ["Upcoming Expressway Entry/Exit", "12.7 km"],
              ["Malur Industrial Estate", "15 km"],
              ["MVJ Medical College", "15 km"],
              ["Hoskote Toll Booth", "19.4 km"],
              ["Hope Farm Junction", "29 km"],
              ["Bangalore Airport KIAL", "41 km"],
            ].map(([title, distance]) => (
              <div key={title} className="luxury-card avalon-simple-card">
                <div className="avalon-simple-icon">
                  <MapPinned size={18} />
                </div>
                <h4>{title}</h4>
                <p>{distance}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-gap">
          <div className="section-title-wrap">
            <p className="eyebrow">Amenities</p>
            <h2>Infrastructure planned for refined plotted living</h2>
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
            <p className="eyebrow">Gallery</p>
            <h2>Explore Avalon through visuals</h2>
          </div>

          <div className="avalon-gallery-grid">
            {[
              { src: "/project-1.jpg", title: "Project Master View" },
              { src: "/project-2.jpg", title: "Landscaped Open Spaces" },
              { src: "/sec.jpg", title: "Internal Road Network" },
              { src: "/about-image.jpg", title: "Community Planning" },
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
          <div className="avalon-digital-title">
            <div>
              <p className="eyebrow">Digital Map</p>
              <h2>Explore Vizipa Avalon digitally</h2>
              <p className="page-lead max-3xl">
                View the interactive project map to explore plot positioning,
                layout details, and availability in a visual experience.
              </p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="avalon-fullscreen-btn"
            >
              View Full Screen <ExternalLink size={15} />
            </a>
          </div>

          <div className="browser-card luxury-card">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              <div className="browser-url">
                Vizipa Avalon — Interactive Digital Map
              </div>
            </div>

            <div className="browser-frame">
              <iframe
                src={mapUrl}
                title="Vizipa Avalon Interactive Digital Map"
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
      </div>

      <style>{`
        .avalon-hero-image-wrap {
          position: relative;
          height: 100svh;
          min-height: 680px;
          width: 100%;
          overflow: hidden;
        }

        .avalon-hero-image {
          object-fit: cover;
          transform: scale(1.015);
        }

        .avalon-hero-overlay {
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

        .avalon-hero-content-wrap {
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

        .avalon-hero-content {
          max-width: 420px;
          color: #ffffff;
          animation: avalonFadeUp 1s ease;
        }

        .avalon-hero-top-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .avalon-back-btn {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          text-decoration: none;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .avalon-back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-3px);
        }

        .avalon-status-tag {
          width: fit-content;
          min-height: 30px;
          padding: 0 14px;
          margin-bottom: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #238636;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          box-shadow: 0 8px 22px rgba(35, 134, 54, 0.28);
        }

        .avalon-hero-content .eyebrow {
          margin: 0 0 6px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .avalon-hero-content h1 {
          max-width: 380px;
          margin: 0 0 8px;
          color: #ffffff;
          font-size: clamp(24px, 3vw, 38px);
          line-height: 1.04;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .avalon-hero-text {
          max-width: 360px;
          margin: 0 0 18px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 11px;
          line-height: 1.58;
        }

        .avalon-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .avalon-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 32px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.13);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          font-size: 11px;
          font-weight: 500;
        }

        @keyframes avalonFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .avalon-featured-location-grid {
          display: grid;
          gap: 18px;
          margin-bottom: 18px;
        }

        .avalon-location-feature-card {
          display: grid;
          grid-template-columns: 340px 1fr;
          overflow: hidden;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(22, 22, 22, 0.08);
        }

        .avalon-location-feature-card.reverse {
          grid-template-columns: 1fr 340px;
        }

        .avalon-location-feature-card.reverse .avalon-location-image {
          order: 2;
        }

        .avalon-location-feature-card.reverse .avalon-location-content {
          order: 1;
        }

        .avalon-location-image {
          position: relative;
          min-height: 230px;
          background: #eaeaea;
        }

        .avalon-location-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .avalon-location-tags {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .avalon-location-tags span {
          min-height: 28px;
          padding: 0 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.06);
          color: var(--accent-dark);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .avalon-location-tags small {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 600;
        }

        .avalon-location-content h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .avalon-location-content p {
          margin: 0;
          max-width: 620px;
          font-size: 14px;
          line-height: 1.75;
          color: var(--muted);
        }

        .avalon-simple-location-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .avalon-simple-card {
          padding: 22px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(22, 22, 22, 0.08);
          transition: all 0.25s ease;
        }

        .avalon-simple-card:hover {
          transform: translateY(-5px);
        }

        .avalon-simple-icon {
          width: 42px;
          height: 42px;
          border-radius: 6px;
          display: grid;
          place-items: center;
          background: rgba(0, 0, 0, 0.05);
          margin-bottom: 14px;
        }

        .avalon-simple-card h4 {
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 1.45;
        }

        .avalon-simple-card p {
          margin: 0;
          font-size: 13px;
          color: var(--muted);
          font-weight: 600;
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

        .avalon-digital-title {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-end;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .avalon-digital-title > div {
          max-width: 760px;
        }

        .avalon-fullscreen-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 46px;
          padding: 0 22px;
          border-radius: 6px;
          background: linear-gradient(135deg, #4c4c4c, #1f1f1f);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
          white-space: nowrap;
        }

        @media (max-width: 980px) {
          .avalon-location-feature-card,
          .avalon-location-feature-card.reverse {
            grid-template-columns: 1fr;
          }

          .avalon-location-feature-card.reverse .avalon-location-image,
          .avalon-location-feature-card.reverse .avalon-location-content {
            order: initial;
          }

          .avalon-simple-location-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 860px) {
          .avalon-hero-content-wrap {
            width: min(1200px, calc(100% - 36px));
            padding-bottom: 36px;
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
          .avalon-hero-image-wrap {
            height: 92svh;
            min-height: 620px;
          }

          .avalon-hero-content-wrap {
            width: calc(100% - 24px);
            padding-bottom: 28px;
          }

          .avalon-hero-content {
            max-width: 300px;
          }

          .avalon-hero-top-row {
            gap: 10px;
            margin-bottom: 14px;
          }

          .avalon-back-btn {
            width: 34px;
            height: 34px;
          }

          .avalon-status-tag {
            min-height: 28px;
            padding: 0 12px;
            font-size: 9px;
          }

          .avalon-hero-content h1 {
            max-width: 280px;
            font-size: clamp(22px, 8vw, 30px);
            margin-bottom: 7px;
          }

          .avalon-hero-text {
            max-width: 270px;
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 16px;
          }

          .avalon-hero-meta {
            gap: 8px;
          }

          .avalon-meta-pill {
            width: 100%;
            justify-content: flex-start;
            min-height: 32px;
            border-radius: 10px;
          }

          .avalon-simple-location-grid {
            grid-template-columns: 1fr;
          }

          .avalon-gallery-card,
          .avalon-gallery-large {
            height: 220px;
          }

          .avalon-location-content {
            padding: 22px;
          }

          .avalon-digital-title {
            align-items: flex-start;
          }

          .avalon-fullscreen-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}