"use client";

import { useState } from "react";

export default function WebsiteViewer() {
  const [active, setActive] = useState(false);

  return (
    <section className="website-viewer-section section-gap">
      <div className="page-shell">
        {/* =========================
            HEADER
        ========================= */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          {/* LEFT */}
          <div style={{ maxWidth: "760px" }}>
            <p className="eyebrow">Live Preview</p>

            <h2>
              Your search, <strong>visualised</strong>. <br />
              Dive into our interactive map to start exploring and find exactly
              what you’re looking for.
            </h2>

            <p
              style={{
                maxWidth: "620px",
                fontSize: "14px",
                lineHeight: "1.8",
                color: "var(--muted)",
              }}
            >
              Located on Chikkanahalli–Malur Road, Avalon by Vizipa spans
              21 acres with 302 residential plots, landscaped spaces,
              underground utilities, and strong long-term growth potential.
            </p>
          </div>

          {/* BUTTON */}
          <a
            href="https://avalonmap.vizipa.com/"
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
              boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              whiteSpace: "nowrap",
            }}
          >
            View Full Screen
          </a>
        </div>

        {/* =========================
            BROWSER CARD
        ========================= */}
        <div
          className="luxury-card"
          style={{
            overflow: "hidden",
            borderRadius: "6px",
            padding: 0,
            background: "rgba(255,255,255,0.92)",
          }}
        >
          {/* TOP BAR */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px 16px",
              background: "rgba(245,245,245,0.95)",
              borderBottom:
                "1px solid rgba(22,22,22,0.08)",
            }}
          >
            {/* DOTS */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ff5f57",
                }}
              />

              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#febc2e",
                }}
              />

              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#28c840",
                }}
              />
            </div>

            {/* URL */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                height: "38px",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                borderRadius: "999px",
                background: "#ffffff",
                border:
                  "1px solid rgba(22,22,22,0.08)",
                fontSize: "12px",
                color: "#5d5d5d",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Vizipa Avalon — Interactive Plot Mapping
            </div>
          </div>

          {/* =========================
              FRAME
          ========================= */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "720px",
              overflow: "hidden",
              background: "#f1f1f1",
            }}
          >
            {/* =========================
                OVERLAY
            ========================= */}
            {!active && (
              <button
                type="button"
                onClick={() => setActive(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 5,
                  border: "none",
                  cursor: "pointer",

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",

                  gap: "14px",

                  textAlign: "center",

                  background:
                    "linear-gradient(180deg, rgba(245, 245, 245, 0.12), rgba(245, 245, 245, 0.44))",

                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",

                  padding: "20px",
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: "74px",
                    height: "74px",
                    borderRadius: "999px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    background:
                      "linear-gradient(135deg, #4c4c4c, #1f1f1f)",

                    color: "#ffffff",

                    boxShadow:
                      "0 18px 40px rgba(0,0,0,0.16)",
                  }}
                >
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.7}
  stroke="currentColor"
  style={{
    width: "34px",
    height: "34px",
  }}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 6.75V15m6-6v6m-9 4.5h12A2.25 2.25 0 0020.25 17.25V6.75A2.25 2.25 0 0018 4.5H6A2.25 2.25 0 003.75 6.75v10.5A2.25 2.25 0 006 19.5z"
  />
</svg>
                </div>

                {/* CONTENT */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    maxWidth: "460px",
                  }}
                >
                  {/* LABEL */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",

                      minHeight: "26px",
                      padding: "0 12px",

                      borderRadius: "999px",

                      background: "rgba(0,0,0,0.06)",

                      color: "#3d3d3d",

                      fontSize: "9px",
                      fontWeight: "700",

                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Interactive Mapping
                  </div>

                  {/* TITLE */}
                  <h3
                    style={{
                      margin: 0,

                      fontFamily:
                        "var(--font-heading), Georgia, serif",

                      fontSize:
                        "clamp(22px, 2vw, 30px)",

                      lineHeight: "1.1",
                      letterSpacing: "-0.02em",

                      color: "#111111",
                    }}
                  >
                    Experience Interactive{" "}
                    <strong>Plot Discovery</strong>
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    style={{
                      margin: 0,

                      maxWidth: "420px",

                      fontSize: "13px",
                      lineHeight: "1.7",

                      color: "#5b5b5b",
                    }}
                  >
                    Explore live availability,
                    plot insights, and premium
                    interactive navigation.
                  </p>

                  {/* FEATURES */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      gap: "8px",
                      flexWrap: "wrap",

                      marginTop: "4px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",

                        gap: "6px",

                        minHeight: "32px",
                        padding: "0 12px",

                        borderRadius: "999px",

                        background:
                          "rgba(255,255,255,0.72)",

                        border:
                          "1px solid rgba(22,22,22,0.08)",

                        color: "#222222",

                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    >
                      📍 Live Availability
                    </div>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",

                        gap: "6px",

                        minHeight: "32px",
                        padding: "0 12px",

                        borderRadius: "999px",

                        background:
                          "rgba(255,255,255,0.72)",

                        border:
                          "1px solid rgba(22,22,22,0.08)",

                        color: "#222222",

                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    >
                      ⚡ Interactive Map
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      marginTop: "6px",

                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",

                      minHeight: "40px",
                      padding: "0 18px",

                      borderRadius: "999px",

                      background:
                        "linear-gradient(135deg, #4c4c4c, #1f1f1f)",

                      color: "#ffffff",

                      fontSize: "11px",
                      fontWeight: "600",

                      letterSpacing: "0.06em",
                      textTransform: "uppercase",

                      boxShadow:
                        "0 12px 28px rgba(0,0,0,0.14)",
                    }}
                  >
                    Activate Experience
                  </div>
                </div>
              </button>
            )}

            {/* =========================
                IFRAME
            ========================= */}
            <iframe
              src="https://avalonmap.vizipa.com/?embed=true"
              title="Vizipa Avalon Preview"
              loading="lazy"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",

                /* IMPORTANT FIX */
                pointerEvents: active
                  ? "auto"
                  : "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}