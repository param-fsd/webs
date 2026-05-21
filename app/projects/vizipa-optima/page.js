import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MapPinned,
  Building2,
  Trees,
  Camera,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Vizipa Optima | Vizipa",
  description:
    "Vizipa Optima is an affordable apartment project on Sarjapur Road, Bangalore, offering lifestyle, connectivity, quality living, and premium community amenities.",
};

export default function VizipaOptimaPage() {
  return (
    <>
      <section className="optima-hero-image-wrap">
        <Image
          src="/img6.jpg"
          alt="Vizipa Optima"
          fill
          priority
          className="optima-hero-image"
        />

        <div className="optima-hero-overlay" />

        <div className="optima-hero-content-wrap">
          <div className="optima-hero-content">
            <div className="optima-hero-top-row">
              <Link href="/projects" className="optima-back-btn">
                <ArrowLeft size={17} />
              </Link>

              <div className="optima-status-tag">Completed</div>
            </div>

            <p className="eyebrow light">Affordable Apartment Project</p>

            <h1>Vizipa Optima</h1>

            <p className="optima-hero-text">
              Lifestyle, quality, and affordability — a rare combination on
              Sarjapur Road, Bangalore.
            </p>

            <div className="optima-hero-meta">
              <div className="optima-meta-pill">
                <MapPinned size={14} />
                <span>Sarjapur Road, Bangalore</span>
              </div>

              <div className="optima-meta-pill">
                <Building2 size={14} />
                <span>70 Premium Homes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <section className="section-gap">
          <div className="card-grid four-grid">
            {[
              ["Project Status", "Completed"],
              ["Total Homes", "70"],
              ["Project Area", "1 Acre 7 Guntas"],
              ["Location", "Sarjapur Road"],
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
            <h2>
              Designed for connected living, comfort, and everyday convenience
            </h2>
            <p className="page-lead max-3xl">
              Vizipa Optima is an affordable apartment project situated on
              Sarjapur Road, Bangalore. Located just 500 meters off Sarjapur Main
              Road, the project enjoys close proximity to leading IT parks,
              schools, colleges, malls, and major social infrastructure while
              remaining peacefully away from the city's hustle and bustle.
            </p>
            <p className="page-lead max-3xl">
              Spread across 1 acre and 7 guntas, Vizipa Optima consists of 70
              thoughtfully designed homes across two residential blocks rising
              four levels above parking. Every home is naturally ventilated and
              designed to offer excellent openness and views of landscaped
              spaces.
            </p>
          </div>
        </section>

        <section className="section-gap">
          <div className="section-title-wrap">
            <p className="eyebrow">Key Highlights</p>
            <h2>Designed around lifestyle, quality, and convenience</h2>
          </div>

          <div className="card-grid three-grid">
            {[
              "70 thoughtfully designed premium homes.",
              "Spread across 1 acre and 7 guntas.",
              "Located just 500 meters off Sarjapur Main Road.",
              "Two residential blocks with four levels above parking.",
              "Naturally ventilated homes with open space views.",
              "Close to IT parks, schools, colleges, malls, and social infrastructure.",
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
            <h2>Connected to everyday essentials</h2>
            <p className="page-lead max-3xl">
              Vizipa Optima is positioned near Sarjapur Road, one of Bangalore’s
              active residential and commercial corridors, offering convenient
              access to workplaces, schools, retail, and lifestyle destinations.
            </p>
          </div>

          <div className="optima-simple-location-grid">
            {[
              ["Sarjapur Main Road", "500 m"],
              ["Leading IT Parks", "Nearby"],
              ["Schools & Colleges", "Nearby"],
              ["Shopping & Malls", "Nearby"],
              ["Social Infrastructure", "Nearby"],
              ["Peaceful Residential Setting", "Prime Advantage"],
            ].map(([title, distance]) => (
              <div key={title} className="luxury-card optima-simple-card">
                <div className="optima-simple-icon">
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
            <h2>Community spaces planned for refined everyday living</h2>
          </div>

          <div className="card-grid four-grid">
            {[
              "Swimming pool",
              "Central courtyard",
              "Clubhouse",
              "Multi-purpose hall",
              "Barbecue area",
              "Jogging track",
              "Landscaped leisure park",
              "Open social spaces",
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
            <h2>Explore Vizipa Optima through visuals</h2>
          </div>

          <div className="optima-gallery-grid">
            {[
              { src: "/2.jpg", title: "" },
              { src: "/3.jpg", title: "" },
              { src: "/5.jpg", title: "" },
              { src: "/7.jpg", title: "" },
            ].map((item, index) => (
              <div
                className={`luxury-card optima-gallery-card ${
                  index === 0 ? "optima-gallery-large" : ""
                }`}
                key={item.title}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="cover-image"
                />

                <div className="optima-gallery-overlay">
                  <Camera size={15} />
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-gap luxury-band">
          <div className="row-title">
            <div>
              <p className="eyebrow">Enquire Now</p>
              <h2>Interested in Vizipa Optima?</h2>
              <p>
                Connect with the Vizipa team to know more about project details,
                lifestyle amenities, and completed project information.
              </p>
            </div>

            <Link href="/contact" className="gold-btn">
              Contact Sales
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        .optima-hero-image-wrap {
          position: relative;
          height: 100svh;
          min-height: 680px;
          width: 100%;
          overflow: hidden;
        }

        .optima-hero-image {
          object-fit: cover;
          transform: scale(1.015);
        }

        .optima-hero-overlay {
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

        .optima-hero-content-wrap {
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

        .optima-hero-content {
          max-width: 420px;
          color: #ffffff;
          animation: optimaFadeUp 1s ease;
        }

        .optima-hero-top-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .optima-back-btn {
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
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .optima-back-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-3px);
        }

        .optima-status-tag {
          width: fit-content;
          min-height: 30px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #222222;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
        }

        .optima-hero-content .eyebrow {
          margin: 0 0 6px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 9px;
          letter-spacing: 0.14em;
        }

        .optima-hero-content h1 {
          max-width: 380px;
          margin: 0 0 8px;
          color: #ffffff;
          font-size: clamp(24px, 3vw, 38px);
          line-height: 1.04;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .optima-hero-text {
          max-width: 360px;
          margin: 0 0 18px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 11px;
          line-height: 1.58;
        }

        .optima-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .optima-meta-pill {
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

        @keyframes optimaFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .optima-simple-location-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .optima-simple-card {
          padding: 22px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(22, 22, 22, 0.08);
          transition: all 0.25s ease;
        }

        .optima-simple-card:hover {
          transform: translateY(-5px);
        }

        .optima-simple-icon {
          width: 42px;
          height: 42px;
          border-radius: 6px;
          display: grid;
          place-items: center;
          background: rgba(0, 0, 0, 0.05);
          margin-bottom: 14px;
        }

        .optima-simple-card h4 {
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 1.45;
        }

        .optima-simple-card p {
          margin: 0;
          font-size: 13px;
          color: var(--muted);
          font-weight: 600;
        }

        .optima-gallery-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          grid-template-rows: repeat(3, 180px);
          gap: 18px;
        }

        .optima-gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 6px;
          min-height: 180px;
        }

        .optima-gallery-large {
          grid-row: span 3;
        }

        .optima-gallery-overlay {
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

        .optima-gallery-card::after {
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

        @media (max-width: 980px) {
          .optima-simple-location-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 860px) {
          .optima-hero-content-wrap {
            width: min(1200px, calc(100% - 36px));
            padding-bottom: 36px;
          }

          .optima-gallery-grid {
            grid-template-columns: 1fr;
            grid-template-rows: none;
          }

          .optima-gallery-card,
          .optima-gallery-large {
            height: 260px;
            grid-row: auto;
          }
        }

        @media (max-width: 640px) {
          .optima-hero-image-wrap {
            height: 92svh;
            min-height: 620px;
          }

          .optima-hero-content-wrap {
            width: calc(100% - 24px);
            padding-bottom: 28px;
          }

          .optima-hero-content {
            max-width: 300px;
          }

          .optima-hero-top-row {
            gap: 10px;
            margin-bottom: 14px;
          }

          .optima-back-btn {
            width: 34px;
            height: 34px;
          }

          .optima-status-tag {
            min-height: 28px;
            padding: 0 12px;
            font-size: 9px;
          }

          .optima-hero-content h1 {
            max-width: 280px;
            font-size: clamp(22px, 8vw, 30px);
            margin-bottom: 7px;
          }

          .optima-hero-text {
            max-width: 270px;
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 16px;
          }

          .optima-meta-pill {
            width: 100%;
            justify-content: flex-start;
            border-radius: 10px;
          }

          .optima-simple-location-grid {
            grid-template-columns: 1fr;
          }

          .optima-gallery-card,
          .optima-gallery-large {
            height: 220px;
          }
        }
      `}</style>
    </>
  );
}