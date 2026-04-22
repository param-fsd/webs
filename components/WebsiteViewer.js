"use client";

export default function WebsiteViewer() {
  return (
    <section className="website-viewer-section section-gap">
      <div className="page-shell">
        <div className="website-viewer-head">
          <p className="eyebrow">Live Preview</p>
          <h2>Project Website Preview</h2>
          <p className="website-viewer-lead">
            A live embedded preview of the external project page inside a
            browser-style frame.
          </p>
        </div>

        <div className="browser-card luxury-card">
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="browser-url">
              map preview
            </div>
          </div>

          <div className="browser-frame">
            <iframe
              src=""
              title="Preview"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}