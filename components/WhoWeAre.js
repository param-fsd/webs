"use client";

export default function WhoWeAre() {
  return (
    <section className="who-section section-gap">
      <div className="page-shell">
        <div className="who-grid">
          
          {/* LEFT CONTENT */}
          <div className="who-content">
            <p className="eyebrow">Who We Are</p>

            <h2>
              Building Landmarks That Reflect Vision, Precision & Trust
            </h2>

            <p className="who-lead">
              Vizipa Constructions is built on a foundation of clarity,
              commitment, and long-term value creation. Every plotted
              development we craft is designed to balance modern
              infrastructure with natural harmony.
            </p>

            <p>
              From land acquisition to final delivery, our approach is rooted
              in detail, transparency, and a deep understanding of what
              tomorrow’s homeowners truly seek.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="who-image-wrap">
            <img
              src="/img5.jpg"  /* replace with your image */
              alt="Vizipa developments"
              className="who-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}