
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
  GraduationCap,
  Factory,
  Plane,
  Hospital,
  ShoppingBag,
  Route,
} from "lucide-react";

export const metadata = {
  title: "Vizipa Avalon | Premium Plotted Development",
  description:
    "Vizipa Avalon is a DTCP-approved premium plotted development at Chikkanahalli-Malur Road with 302 plots, landscaped parks, underground infrastructure, and interactive project map.",
};

export default function VizipaAvalonPage() {
  const mapUrl = "https://avalonmap.vizipa.com/";

  const heroImages = ["/img4.jpg", "/img7.jpg", "/img5.jpg", "/img8.jpeg"];

  const keyLocations = [
    {
      title: "Sharanya Narayani International School",
      type: "Education",
      distance: "300 m",
      icon: GraduationCap,
    },
    {
      title: "Volvo Factory",
      type: "Industrial",
      distance: "3.3 km",
      icon: Factory,
    },
    {
      title: "Wistron Infocomm Manufacturing",
      type: "Manufacturing",
      distance: "11 km",
      icon: Factory,
    },
    {
      title: "Honda Factory",
      type: "Industrial",
      distance: "11.8 km",
      icon: Factory,
    },
    {
      title: "Upcoming Expressway Entry/Exit",
      type: "Connectivity",
      distance: "12.7 km",
      icon: Route,
    },
    {
      title: "Malur Industrial Estate",
      type: "Growth Belt",
      distance: "15 km",
      icon: Building2,
    },
    {
      title: "MVJ Medical College",
      type: "Healthcare",
      distance: "15 km",
      icon: Hospital,
    },
    {
      title: "PVR Orion Uptown Mall",
      type: "Lifestyle",
      distance: "20 km",
      icon: ShoppingBag,
    },
    {
      title: "Bangalore Airport KIAL",
      type: "Airport",
      distance: "41 km",
      icon: Plane,
    },
  ];

  return (
    <>
      <section className="avalon-hero-image-wrap">
        <div className="avalon-hero-slider">
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Vizipa Avalon Hero ${index + 1}`}
              fill
              priority={index === 0}
              className={`avalon-hero-image hero-slide hero-slide-${index + 1}`}
            />
          ))}
        </div>

        <div className="avalon-hero-overlay" />

        <div className="avalon-hero-content-wrap">
          <div className="avalon-hero-content">
            <div className="avalon-hero-top-row">
              <Link href="/projects" className="avalon-back-btn">
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
              <div className="avalon-meta-pill">
                <Building2 size={14} />
                <span>PRM/KA/RERA/1265/347/PR/300323/005830</span>
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
              ["Approval", "DTCP & RERA Approved"],
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
      </div>

      <section className="avalon-quote-section">
        <Image
          src="/img7.jpg"
          alt="Vizipa Avalon"
          fill
          className="avalon-quote-image"
        />

        <div className="avalon-quote-overlay" />

        <div className="avalon-quote-inner">
          <div className="avalon-quote-content">
            

            <h2>Crafted for peaceful living, designed for long-term value.</h2>

            <p>
              Vizipa Avalon blends nature, connectivity, and planned
              infrastructure into a refined plotted community experience.
            </p>
          </div>
        </div>
      </section>

      <div className="page-shell">
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
              Avalon is positioned close to education, industries, healthcare,
              lifestyle and major connectivity points across the Hoskote–Malur
              growth corridor.
            </p>
          </div>

          <div className="location-highlight-strip">
            <div>
              <span>Nearest Landmark</span>
              <strong>300 m</strong>
              <p>International School</p>
            </div>

            <div>
              <span>Industrial Belt</span>
              <strong>3.3 km</strong>
              <p>Volvo Factory</p>
            </div>

            <div>
              <span>Airport Access</span>
              <strong>41 km</strong>
              <p>Bangalore KIAL</p>
            </div>
          </div>

          <div className="location-card-grid-new">
            {keyLocations.map((place) => {
              const Icon = place.icon;

              return (
                <div className="luxury-card location-mini-card" key={place.title}>
                  <div className="location-mini-icon">
                    <Icon size={17} />
                  </div>

                  <div className="location-mini-content">
                    <div className="location-mini-top">
                      <span>{place.type}</span>
                      <strong>{place.distance}</strong>
                    </div>

                    <h3>{place.title}</h3>
                  </div>
                </div>
              );
            })}
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
              { src: "/img7.jpg", title: "Entrance" },
              { src: "/img4.jpg", title: "Club House" },
              { src: "/img5.jpg", title: "" },
              { src: "/img8.jpeg", title: "" },
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
                src="https://avalonmap.vizipa.com/?embed=true"
              title="Vizipa Avalon Preview"
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

        .avalon-hero-slider {
          position: absolute;
          inset: 0;
        }

        .avalon-hero-image {
          object-fit: cover;
        }

        .hero-slide {
          opacity: 0;
          animation: avalonHeroSlide 20s infinite;
          transform: scale(1.04);
        }

        .hero-slide-1 {
          animation-delay: 0s;
        }

        .hero-slide-2 {
          animation-delay: 5s;
        }

        .hero-slide-3 {
          animation-delay: 10s;
        }

        .hero-slide-4 {
          animation-delay: 15s;
        }

        @keyframes avalonHeroSlide {
          0% {
            opacity: 0;
            transform: scale(1.04);
          }

          8% {
            opacity: 1;
          }

          25% {
            opacity: 1;
            transform: scale(1.08);
          }

          33% {
            opacity: 0;
          }

          100% {
            opacity: 0;
            transform: scale(1.04);
          }
        }

        .avalon-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.08),
              rgba(0, 0, 0, 0.26) 48%,
              rgba(0, 0, 0, 0.6)
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.36),
              rgba(0, 0, 0, 0.14)
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
          max-width: 440px;
          color: #ffffff;
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
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          text-decoration: none;
        }

        .avalon-status-tag {
          min-height: 30px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: #238636;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .avalon-hero-content h1 {
          color: #ffffff;
          margin: 0 0 10px;
          font-size: clamp(30px, 3vw, 42px);
          line-height: 1.08;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .avalon-hero-content .eyebrow,
        .avalon-hero-text {
          color: rgba(255, 255, 255, 0.86);
        }

        .avalon-hero-text {
          margin: 0 0 18px;
          font-size: 14px;
          line-height: 1.8;
        }

        .avalon-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .avalon-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 34px;
          padding: 0 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.14);
          font-size: 11px;
        }

        .avalon-quote-section {
          position: relative;
          min-height: 420px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          margin: 40px 0 80px;
        }

        .avalon-quote-image {
          object-fit: cover;
        }

        .avalon-quote-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.22),
              rgba(0, 0, 0, 0.48)
            );
        }

        .avalon-quote-inner {
          position: relative;
          z-index: 2;
          width: min(1200px, calc(100% - 64px));
          min-height: 420px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avalon-quote-content {
          max-width: 720px;
          color: #ffffff;
          text-align: center;
        }

        .avalon-quote-eyebrow {
          margin: 0 0 12px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .avalon-quote-content h2 {
          color: #ffffff;
          margin: 0 0 16px;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.16;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .avalon-quote-content p {
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.86);
          font-size: 14px;
          line-height: 1.8;
          max-width: 560px;
        }

        .location-highlight-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 22px;
        }

        .location-highlight-strip div {
          padding: 22px;
          border-radius: 8px;
          background: #111111;
          color: #ffffff;
        }

        .location-highlight-strip span {
          display: block;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.62);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .location-highlight-strip strong {
          display: block;
          margin-bottom: 5px;
          font-size: 26px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .location-highlight-strip p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 12px;
        }

        .location-card-grid-new {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .location-mini-card {
          padding: 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(22, 22, 22, 0.08);
          transition: all 0.25s ease;
        }

        .location-mini-card:hover {
          transform: translateY(-4px);
        }

        .location-mini-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          background: rgba(0, 0, 0, 0.06);
          color: #111111;
        }

        .location-mini-content {
          flex: 1;
          min-width: 0;
        }

        .location-mini-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
        }

        .location-mini-top span {
          color: var(--muted);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .location-mini-top strong {
          color: #111111;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .location-mini-card h3 {
          margin: 0;
          color: #111111;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 500;
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
          border-radius: 8px;
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
          white-space: nowrap;
        }

        @media (max-width: 980px) {
          .location-card-grid-new {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 860px) {
          .avalon-hero-content-wrap {
            width: min(1200px, calc(100% - 36px));
            padding-bottom: 36px;
          }

          .location-highlight-strip {
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

          .avalon-hero-content h1,
          .avalon-quote-content h2 {
            font-size: clamp(26px, 8vw, 34px);
          }

          .avalon-meta-pill {
            width: 100%;
            border-radius: 10px;
          }

          .avalon-quote-section {
            min-height: 340px;
            margin: 32px 0 60px;
          }

          .avalon-quote-inner {
            width: calc(100% - 24px);
            min-height: 340px;
          }

          .location-card-grid-new {
            grid-template-columns: 1fr;
          }

          .location-mini-card {
            padding: 16px;
          }

          .avalon-gallery-card,
          .avalon-gallery-large {
            height: 220px;
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