"use client";

export default function WebsiteViewer() {
  return (
    <section className="website-viewer-section section-gap">
      <div className="page-shell">
        {/* =========================
            HEADER
        ========================= */}
        <div
          className="website-viewer-head"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ maxWidth: "760px" }}>
            <p className="eyebrow">Live Preview</p>

            <h2>Vizipa Avalon</h2>

            <p className="website-viewer-lead">
              Premium plotted development with interactive map experience.
            </p>

            <p className="website-project-desc">
              Located on Chikkanahalli–Malur Road, Avalon by Vizipa spans
              21 acres with 302 residential plots, landscaped spaces,
              underground utilities, and strong long-term growth potential.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <a
            href="https://avalonmap2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "46px",
              padding: "0 22px",
              borderRadius: "6px",
              background:
                "linear-gradient(135deg, #4c4c4c, #1f1f1f)",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "0.03em",
              textDecoration: "none",
              transition: "all 0.25s ease",
              boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 16px 34px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(0,0,0,0.12)";
            }}
          >
            View Full Screen
          </a>
        </div>

        {/* =========================
            BROWSER CARD
        ========================= */}
        <div className="browser-card luxury-card">
          {/* TOP BAR */}
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="browser-url">
              Vizipa Avalon — Interactive Plot Mapping Experience
            </div>
          </div>

          {/* WEBSITE PREVIEW */}
          <div className="browser-frame">
            <iframe
              src="https://avalonmap2.netlify.app/"
              title="Vizipa Avalon Preview"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}